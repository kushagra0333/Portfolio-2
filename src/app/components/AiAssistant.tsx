import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Loader2 } from 'lucide-react';
import { AssistantAIEngine } from '../../lib/ai';
import { marked } from 'marked';

export function AiAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [isInitializing, setIsInitializing] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [progress, setProgress] = useState(0);
    const [progressText, setProgressText] = useState('');

    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
    const [input, setInput] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    // Keep a single instance of the engine
    const engineRef = useRef<AssistantAIEngine | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleStart = async () => {
        setIsInitializing(true);
        setProgress(0);
        setProgressText('Starting download...');

        if (!engineRef.current) {
            engineRef.current = new AssistantAIEngine();
        }

        try {
            await engineRef.current.init((prog, text) => {
                setProgress(prog);
                setProgressText(text);
            });
            setIsReady(true);
            setMessages([{
                role: 'assistant',
                content: "Hi! I'm Kushagra's local AI assistant. I've read his resume—what would you like to know?"
            }]);
        } catch (e: any) {
            console.error(e);
            const errMsg = e instanceof Error ? e.message : 'Unknown error';
            setProgressText(`Failed to initialize model: ${errMsg}`);
        } finally {
            setIsInitializing(false);
        }
    };

    const handleSend = async () => {
        if (!input.trim() || !isReady || isGenerating || !engineRef.current) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsGenerating(true);

        // Add an empty assistant message to stream into
        setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

        try {
            await engineRef.current.askQuestion(userMessage, (currentResponse) => {
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].content = currentResponse;
                    return newMessages;
                });
            });
        } catch (e) {
            console.error(e);
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].content = "Sorry, I encountered an error generating the response.";
                return newMessages;
            });
        } finally {
            setIsGenerating(false);
        }
    };

    const parseMarkdown = (text: string) => {
        return { __html: marked.parse(text, { async: false }) as string };
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 p-4 rounded-full shadow-2xl transition-all duration-300 z-50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                    } bg-gradient-to-br from-blue-500 to-cyan-500 text-white hover:shadow-cyan-500/50 hover:scale-110 flex items-center justify-center`}
            >
                <Bot className="w-6 h-6" />
                {/* Notification dot */}
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-[#09090b] rounded-full"></span>
            </button>

            {/* Chat Panel */}
            <div
                className={`fixed bottom-6 right-6 w-full max-w-[400px] h-[650px] max-h-[85vh] flex flex-col backdrop-blur-2xl bg-black/85 border border-white/10 rounded-3xl shadow-2xl shadow-blue-900/20 transition-all duration-400 ease-out z-50 origin-bottom-right overflow-hidden ${isOpen ? 'scale-100 opacity-100 pointer-events-auto translate-y-0' : 'scale-95 opacity-0 pointer-events-none translate-y-4'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-white/5 bg-gradient-to-r from-blue-500/10 to-transparent">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <Bot className="w-6 h-6 text-white" />
                            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-black rounded-full"></div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white tracking-tight">Kushagra's AI</h3>
                            <p className="text-xs text-blue-300 flex items-center gap-1 font-medium">
                                Local Engine
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {isReady && messages.length > 1 && (
                            <button
                                onClick={() => setMessages([{ role: 'assistant', content: "Hi! I'm Kushagra's local AI assistant. I've read his resume—what would you like to know?" }])}
                                className="px-3 py-1.5 text-xs text-gray-300 hover:text-white transition-all rounded-full hover:bg-white/10 border border-transparent hover:border-white/10 font-medium"
                                title="Clear Chat"
                            >
                                Clear
                            </button>
                        )}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-gray-400 hover:text-white transition-all rounded-full hover:bg-white/10 hover:rotate-90"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5 min-h-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.98]">
                    {!isReady && !isInitializing && (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30 relative z-10">
                                    <Bot className="w-10 h-10 text-cyan-400" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-bold text-white tracking-tight">Private AI Assistant</h4>
                                <p className="text-sm text-gray-400 leading-relaxed max-w-[250px] mx-auto">
                                    Runs entirely in your browser using WebGPU. No data leaves your device.
                                </p>
                            </div>
                            <button
                                onClick={handleStart}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:-translate-y-0.5"
                            >
                                Enable Engine (~150MB)
                            </button>
                        </div>
                    )}

                    {isInitializing && !isReady && (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-8 animate-in fade-in duration-500">
                            <div className="relative">
                                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse"></div>
                                <Loader2 className="w-12 h-12 text-cyan-400 animate-spin relative z-10" />
                            </div>
                            <div className="space-y-4 w-full max-w-[250px]">
                                <p className="text-sm font-medium text-white/90">{progressText || 'Initializing...'}</p>
                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 relative"
                                        style={{ width: `${Math.max(5, progress)}%` }}
                                    >
                                        <div className="absolute inset-0 bg-white/20 blur-[2px]"></div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 font-mono">{Math.round(progress)}% Complete</p>
                            </div>
                        </div>
                    )}

                    {isReady && messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                        >
                            <div
                                className={`w-fit max-w-[85%] p-4 rounded-2xl text-[15px] leading-relaxed break-words ${msg.role === 'user'
                                    ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-tr-sm shadow-md'
                                    : 'bg-white/5 text-gray-200 border border-white/10 rounded-tl-sm shadow-sm prose prose-invert prose-p:leading-relaxed prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10'
                                    }`}
                                dangerouslySetInnerHTML={msg.role === 'assistant' ? parseMarkdown(msg.content) : undefined}
                            >
                                {msg.role === 'user' ? msg.content : undefined}
                            </div>
                        </div>
                    ))}
                    {isGenerating && (
                        <div className="flex justify-start animate-in fade-in">
                            <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-4 flex gap-1.5 items-center">
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-white/10 bg-black/60 backdrop-blur-md">
                    <form
                        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        className="flex items-center gap-2 relative group"
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={!isReady || isGenerating}
                            placeholder={isReady ? "Ask about Kushagra..." : "Initialize Engine first"}
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3.5 text-[15px] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={!isReady || isGenerating || !input.trim()}
                            className="absolute right-2 p-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-0 disabled:scale-95 duration-200"
                        >
                            {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                        </button>
                    </form>
                    {isReady && <div className="text-center mt-3 text-[11px] text-gray-500 tracking-wide uppercase">AI can make mistakes. Verify important info.</div>}
                </div>
            </div>
        </>
    );
}
