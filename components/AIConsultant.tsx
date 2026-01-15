
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import Button from './Button';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: "Hi! I'm the Northernlight Labs AI consultant. I can help you estimate your project scope or answer questions about our engineering capabilities. How can I help?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are an AI consultant for "Northernlight Labs", a premium software engineering agency. 
          Northernlight Labs offers Product Strategy, Full-stack Engineering (React, Node, Go, Cloud), AI Integration, and UI/UX.
          Target audience: US/UK/German startup founders.
          Tone: Professional, helpful, concise, confident.
          If users ask about prices: Mention that we offer tailored engagement models (Scoped Projects, Growth Pods, and Advisory) based on the specific needs of the product. 
          Encourage them to book a discovery call or submit a brief on the contact page for a customized quote.`,
        },
      });

      const aiText = response.text || "I'm sorry, I couldn't process that. Let's try again or contact our team directly.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "There was an error connecting to my core. Please try again later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Button updated to Spring Green */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-400 text-slate-950 rounded-full flex items-center justify-center shadow-2xl shadow-green-900/40 hover:scale-110 transition-transform duration-300 ease-in-out z-60"
        aria-label="Open AI Strategy Assistant"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.883.214 1.5 1.015 1.5 1.937v3.102c0 .922-.617 1.723-1.5 1.937m-1.5-1.937a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm-1.5-3.938a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3.75 12h.008v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full animate-pulse border-2 border-green-600"></div>
          </div>
        )}
      </button>

      {/* Chat Drawer updated accents to Spring Green */}
      <div className={`fixed bottom-28 right-8 w-[95vw] md:w-[420px] h-[600px] glass rounded-3xl shadow-2xl z-60 flex flex-col transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95 pointer-events-none'}`}>
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/50 rounded-t-3xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-400 rounded-xl flex items-center justify-center">
              <span className="text-slate-950 text-sm font-bold tracking-tighter">AI</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">Northernlight Strategy Bot</h3>
              <div className="flex items-center space-x-1.5">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Active Core</span>
              </div>
            </div>
          </div>
        </div>

        <div ref={scrollRef} className="grow overflow-y-auto p-6 space-y-5">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-green-400 text-slate-950 rounded-tr-none' : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 flex space-x-1.5 items-center">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
        </div>

        <div className="p-5 border-t border-slate-800 bg-slate-900/30">
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex items-center space-x-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Estimate my project scope..."
              className="grow bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={isTyping}
              className="p-3 bg-green-400 text-slate-950 rounded-xl disabled:opacity-50 hover:bg-green-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925L10.788 10l-7.095 1.836-1.414 4.925a.75.75 0 00.826.95 44.82 44.82 0 0012.86-5.325.75.75 0 000-1.325 44.82 44.82 0 00-12.86-5.325z" />
              </svg>
            </button>
          </form>
          <p className="text-[10px] text-center text-slate-500 mt-3 font-medium">Powered by Gemini AI • Q4 Core Update</p>
        </div>
      </div>
    </>
  );
};

export default AIConsultant;
