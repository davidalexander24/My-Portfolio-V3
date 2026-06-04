'use client'
import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Styling for the markdown Gemini returns (bold, links, lists, code). Defined at
// module scope so it isn't recreated on every render. No prose plugin is installed,
// so each element is styled here to match the chat bubble theme.
const mdComponents = {
  strong: (p) => <strong className="font-semibold text-white" {...p} />,
  a: (p) => (
    <a
      className="text-blue-400 underline underline-offset-2 hover:text-blue-300 break-words"
      target="_blank"
      rel="noopener noreferrer"
      {...p}
    />
  ),
  ul: (p) => <ul className="list-disc pl-5 space-y-1" {...p} />,
  ol: (p) => <ol className="list-decimal pl-5 space-y-1" {...p} />,
  code: (p) => <code className="rounded bg-black/40 px-1 py-0.5 text-[0.85em]" {...p} />,
  // headings rarely appear; flatten to emphasized text so they fit the bubble
  h1: (p) => <p className="font-semibold text-white" {...p} />,
  h2: (p) => <p className="font-semibold text-white" {...p} />,
  h3: (p) => <p className="font-semibold text-white" {...p} />,
};

export default function PortfolioChatbot() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef(null);

  // Keep the conversation pinned to the latest message / typing indicator.
  // Scrolls the message container only (not the page).
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInputValue(''); 
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data?.error || "Server is busy right now, please try again in a few moments."
        );
      }

      setMessages(prev => [...prev, { role: 'bot', text: data.text }]);
    } catch (error) {
      const fallbackMessage = "Server is busy right now, please try again in a few moments.";
      const userFacingMessage =
        error instanceof Error && error.message.trim()
          ? error.message
          : fallbackMessage;

      setMessages(prev => [...prev, { role: 'bot', text: userFacingMessage }]);
    }
    
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const suggestions = [
    "What's David's experience?",
    "What projects has he built?",
    "What technologies does he work with?",
    "What makes David stand out?",
    "How can I get in touch with him?"
  ];

  return (
    <section className="w-full pt-16 pb-20">
      <h1 className="text-[38px] inter-extrabold ml-2">Ask My AI Assistant</h1>
      <p className="grays2 text-base pb-6 ml-2 inter">
        Ask anything about my projects, experience, and technical background.
      </p>

      <div className="w-full grays3bg border grays3border rounded-3xl shadow-[0_12px_32px_rgba(0,0,0,0.28)] p-4 sm:p-5 text-white flex flex-col h-[540px]">
        <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto mb-4 pr-2 space-y-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent portfolio-scrollbar">
          {messages.length === 0 && (
            <div className="text-gray-400 text-sm text-center mt-5 mb-4 inter">
              Ask me anything about David&apos;s experience, projects, or skills!
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[88%] px-4 py-2.5 text-sm sm:text-[15px] leading-relaxed inter ${
                  msg.role === 'user'
                    ? 'grays2bg text-white rounded-2xl rounded-br-none'
                    : 'grays text-gray-100 border grays3border rounded-2xl rounded-bl-none'
                }`}
              >
                {msg.role === 'bot' ? (
                  <div className="space-y-2">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="grays text-gray-300 border grays3border rounded-2xl rounded-bl-none px-4 py-2.5 text-sm italic inter flex items-center gap-2">
                <span>David&apos;s AI is typing</span>
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 typing-dot [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 typing-dot [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 typing-dot" />
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex shrink-0 overflow-x-auto gap-2 pb-2 mb-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent portfolio-scrollbar">
          {suggestions.map((suggestion, i) => (
            <button
              key={i}
              onClick={() => sendMessage(suggestion)}
              disabled={loading}
              className="whitespace-nowrap text-xs sm:text-sm inter grays border grays3border rounded-full px-3.5 py-2 text-gray-200 transition-all duration-200 hover:bg-gray-800/80 hover:border-gray-500/70 active:bg-gray-800 active:border-gray-400/80 focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {suggestion}
            </button>
          ))}
        </div>

        <div className="shrink-0 border-t border-gray-700/50 pt-3">
          <form onSubmit={handleSubmit} className="flex gap-2 sm:gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 grays border border-gray-700/50 rounded-full px-4 py-2.5 text-sm sm:text-base text-gray-100 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !inputValue.trim()}
              className="bg-[rgb(23,23,23)] hover:bg-gray-800/80 focus:outline-none focus:ring-2 focus:ring-blue-500/40 active:bg-gray-700 disabled:bg-[rgb(46,46,46)] disabled:text-gray-200 disabled:cursor-not-allowed disabled:opacity-60 text-white px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 shrink-0"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}