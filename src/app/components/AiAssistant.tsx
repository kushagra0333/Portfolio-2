import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Loader2 } from 'lucide-react';
import { AssistantAIEngine } from '../../lib/ai';

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
                content: "Hi! I'm Arjav's local AI assistant. I've read his resume—what would you like to know?"
            }]);
        } catch (e) {
            console.error(e);
            setProgressText('Failed to initialize model. Please check console for errors.');
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

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 p-4 rounded-full shadow-2xl transition-all duration-300 z-50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                    } bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-cyan-500/50 hover:scale-110`}
            >
                <Bot className="w-6 h-6" />
            </button>

            {/* Chat Panel */}
            <div
                className={`fixed bottom-6 right-6 w-[380px] h-[600px] max-h-[80vh] flex flex-col backdrop-blur-xl bg-black/80 border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 z-50 origin-bottom-right overflow-hidden ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-95 opacity-0 pointer-events-none'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center">
                            <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">Ask my AI</h3>
                            <p className="text-xs text-green-400 flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                Local Browser LLM
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 min-h-0">
                    {!isReady && !isInitializing && (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-6">
                            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <Bot className="w-8 h-8 text-blue-400" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold text-white">Private AI Assistant</h4>
                                <p className="text-sm text-gray-400">
                                    This AI assistant runs locally in your browser. To enable it, a small AI model (~150MB) will be downloaded. No data leaves your device.
                                </p>
                            </div>
                            <button
                                onClick={handleStart}
                                className="w-full py-3 px-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                            >
                                Start AI Assistant
                            </button>
                        </div>
                    )}

                    {isInitializing && !isReady && (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-6">
                            <Loader2 className="w-10 h-10 text-cyan-400 animate-spin" />
                            <div className="space-y-4 w-full">
                                <p className="text-sm font-medium text-white">{progressText || 'Initializing...'}</p>
                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                                        style={{ width: `${Math.max(5, progress)}%` }}
                                    />
                                </div>
                                <p className="text-xs text-gray-400">{Math.round(progress)}% Complete</p>
                            </div>
                        </div>
                    )}

                    {isReady && messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-tr-sm'
                                        : 'bg-white/10 text-gray-200 border border-white/5 rounded-tl-sm'
                                    }`}
                            >
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-white/10 bg-black/40">
                    <form
                        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        className="flex items-center gap-2"
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={!isReady || isGenerating}
                            placeholder={isReady ? "Ask about Arjav's work..." : "Initialize AI first..."}
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={!isReady || isGenerating || !input.trim()}
                            className="p-3 bg-cyan-500 text-black rounded-xl hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
