import * as pdfjsLib from 'pdfjs-dist';
// @ts-ignore
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { pipeline, env } from '@xenova/transformers';
import { CreateMLCEngine, MLCEngine } from '@mlc-ai/web-llm';

// Use local Vite import for the PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

// Disable local models for transformers to enforce CDN usage in browser
env.allowLocalModels = false;

export interface RAGChunk {
    text: string;
    embedding: number[];
}

export class AssistantAIEngine {
    private engine: MLCEngine | null = null;
    private vectorStore: RAGChunk[] = [];
    private extractor: any = null;
    private isInitialized = false;

    async init(onProgress: (progress: number, text: string) => void) {
        if (this.isInitialized) return;

        if (!(navigator as any).gpu) {
            throw new Error("WebGPU is not supported by your browser. The AI requires WebGPU to run locally.");
        }

        onProgress(5, 'Initialize feature extraction...');
        // Initialize embedding model
        this.extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
            progress_callback: (p: any) => {
                if (p.status === 'progress') {
                    // Map to 5-30%
                    onProgress(5 + p.progress * 0.25, `Loading embedding model...`);
                }
            }
        });

        onProgress(30, 'Loading and indexing resume...');
        await this.loadAndIndexResume();

        onProgress(40, 'Starting LLM Engine...');
        // Initialize WebLLM model
        this.engine = await CreateMLCEngine('SmolLM2-135M-Instruct-q0f16-MLC', {
            initProgressCallback: (report) => {
                // WebLLM progress goes from 0 to 1. Map to 40-100
                const mapped = 40 + (report.progress * 60);
                onProgress(mapped, `Loading LLM: ${report.text}`);
            }
        });

        this.isInitialized = true;
        onProgress(100, 'Ready');
    }

    private async loadAndIndexResume() {
        try {
            const loadingTask = pdfjsLib.getDocument('/resume.pdf');
            const pdf = await loadingTask.promise;
            let fullText = '';

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                const pageText = textContent.items.map((item: any) => item.str).join(' ');
                fullText += pageText + ' ';
            }

            // Chunk the text into meaningful sizes
            const chunks = this.chunkText(fullText, 400, 100);

            // Generate embeddings
            for (const chunk of chunks) {
                const output = await this.extractor(chunk, { pooling: 'mean', normalize: true });
                this.vectorStore.push({
                    text: chunk,
                    embedding: Array.from(output.data) as number[]
                });
            }
            console.log(`Indexed ${chunks.length} chunks from resume.`);
        } catch (e) {
            console.error('Failed to index resume:', e);
        }
    }

    private chunkText(text: string, size: number, overlap: number): string[] {
        const chunks: string[] = [];
        let i = 0;
        while (i < text.length) {
            chunks.push(text.slice(i, i + size));
            i += size - overlap;
        }
        return chunks;
    }

    private cosineSimilarity(vecA: number[], vecB: number[]): number {
        let dotProduct = 0;
        let normA = 0;
        let normB = 0;
        for (let i = 0; i < vecA.length; i++) {
            dotProduct += vecA[i] * vecB[i];
            normA += vecA[i] * vecA[i];
            normB += vecB[i] * vecB[i];
        }
        if (normA === 0 || normB === 0) return 0;
        return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
    }

    async askQuestion(question: string, onUpdate: (text: string) => void): Promise<string> {
        if (!this.engine || !this.extractor) {
            throw new Error("Engine not initialized");
        }

        // 1. Embed query
        const queryOutput = await this.extractor(question, { pooling: 'mean', normalize: true });
        const queryEmbedding = Array.from(queryOutput.data) as number[];

        // 2. Retrieve top chunks
        const scoredChunks = this.vectorStore.map(chunk => ({
            text: chunk.text,
            score: this.cosineSimilarity(queryEmbedding, chunk.embedding)
        }));

        scoredChunks.sort((a, b) => b.score - a.score);
        // Take Top 5 chunks for better context window filling
        const topChunks = scoredChunks.slice(0, 5).map(c => c.text);
        const context = topChunks.join('\n\n');

        // 3. Generate response using WebLLM
        const messages = [
            { role: "system" as const, content: "You are a helpful AI assistant on Kushagra Pandey's portfolio website. Your primary source of truth is the provided context from his resume. Keep answers concise, professional, and directly address the user's question without hallucinating information. If you don't know, state so clearly." },
            { role: "user" as const, content: `Context:\n${context}\n\nQuestion: ${question}` }
        ];

        const chunks = await this.engine.chat.completions.create({
            messages,
            temperature: 0.2, // Low temp for more factual generation based on context
            stream: true,
        });

        let fullResponse = "";
        for await (const chunk of chunks) {
            const delta = chunk.choices[0]?.delta?.content || "";
            fullResponse += delta;
            onUpdate(fullResponse);
        }

        return fullResponse;
    }
}
