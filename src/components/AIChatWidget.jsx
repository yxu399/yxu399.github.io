import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Bot, User, ArrowUp, Loader2 } from 'lucide-react';
import { marked } from 'marked';
import { resumeContext } from '../content';

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      content: "Hi! I'm Riley's AI assistant. Ask me anything about her experience, skills, or projects!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const callGeminiChat = async (userQuery) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

    // Validate API key exists
    if (!apiKey) {
      console.error('API key not configured');
      throw new Error('API_KEY_MISSING');
    }

    console.log('API Key present:', !!apiKey);

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`;

    const systemPrompt = `You are a helpful AI assistant for Riley Xu's portfolio website.
Use the following context about Riley to answer questions.
Keep answers concise (under 3 sentences) unless asked for detail.
Be professional, enthusiastic, and confident.

CONTEXT:
${resumeContext}`;

    const payload = {
      contents: [{
        parts: [{ text: userQuery }]
      }],
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      }
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      console.error('API request failed:', response.status, response.statusText);
      throw new Error('API_REQUEST_FAILED');
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response.";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await callGeminiChat(userMessage);
      setMessages(prev => [...prev, { role: 'ai', content: response }]);
    } catch (error) {
      console.error('Chat error:', error);
      let errorMessage = "I'm sorry, I encountered an error.";

      if (error.message === 'API_KEY_MISSING') {
        errorMessage = "⚠️ API key not configured. Please add VITE_GEMINI_API_KEY to your .env file and restart the dev server.";
      } else if (error.message === 'API_REQUEST_FAILED') {
        errorMessage = "Failed to connect to AI service. Please check your API key or try again later.";
      }

      setMessages(prev => [...prev, {
        role: 'ai',
        content: errorMessage
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col transition-all transform origin-bottom-right">
          {/* Header */}
          <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Ask AI Riley</h3>
                <p className="text-xs text-slate-400">Powered by Gemini</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-slate-800 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-80 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3 text-sm">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-1 ${
                  msg.role === 'ai'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}>
                  {msg.role === 'ai' ? <Bot size={12} /> : <User size={12} />}
                </div>
                <div className={`p-3 rounded-2xl shadow-sm border text-sm max-w-[85%] ${
                  msg.role === 'ai'
                    ? 'bg-white border-slate-100 text-slate-700 rounded-tl-none'
                    : 'bg-blue-600 text-white rounded-tr-none border-blue-600'
                }`}>
                  {msg.role === 'ai' ? (
                    <div
                      className="prose prose-sm prose-slate max-w-none [&>*]:my-1"
                      dangerouslySetInnerHTML={{ __html: marked.parse(msg.content) }}
                    />
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-white mt-1">
                  <Bot size={12} />
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-100">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full pl-4 pr-10 py-2 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 text-sm"
                placeholder="Ask a question..."
                autoComplete="off"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-1 top-1 p-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowUp size={16} />
              </button>
            </form>
            <div className="text-[10px] text-center text-slate-400 mt-2">
              Gemini can make mistakes. Check important info.
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-full shadow-lg hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
      >
        <Sparkles size={20} className="text-blue-400" />
        <span className="font-medium text-sm">Chat with AI Riley</span>
      </button>
    </div>
  );
};

export default AIChatWidget;
