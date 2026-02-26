import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTerminal, FiX } from "react-icons/fi";

/**
 * WelcomeToast Component
 * Displays a sophisticated typewriter message for visitors.
 * Features senior-level state management and framer-motion animations.
 */
export default function WelcomeToast() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const fullText = "SYSTEM Ready. Welcome, explorer. Check out the latest projects below.";
  
  useEffect(() => {
    // Show toast after a short delay for better UX entrance
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (show && text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [show, text]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-[100] max-w-sm w-full"
        >
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-2xl overflow-hidden relative group">
            {/* Terminal bar */}
            <div className="flex items-center gap-2 mb-3 border-b border-gray-800 pb-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-1">
                status_check.sh
              </span>
              
              <button 
                onClick={() => setShow(false)}
                className="ml-auto text-gray-500 hover:text-white transition-colors"
                aria-label="Close message"
              >
                <FiX size={16} />
              </button>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                  <FiTerminal size={20} />
                </div>
              </div>
              
              <div className="flex-1">
                <p className="text-sm font-mono text-gray-300 leading-relaxed min-h-[40px]">
                  {text}
                  <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-brand-500 ml-1 translate-y-0.5"
                  />
                </p>
                
                <div className="mt-4 flex justify-end">
                  <button 
                    onClick={() => setShow(false)}
                    className="text-[11px] font-bold text-brand-500 uppercase tracking-wider hover:text-brand-400 transition-colors"
                  >
                    Acknowledged
                  </button>
                </div>
              </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-brand-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
