import React from "react";
import { MessageSquare, X } from "lucide-react";

/**
 * Floating circular button in the bottom-right corner to toggle chat window.
 * Features hover/active micro-animations and smooth transitions.
 * 
 * @param {boolean} props.isOpen - Chat window open status.
 * @param {Function} props.onClick - Click event callback.
 */
const ChatButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0d1117]/95 border border-cyan-400 text-cyan-400 rounded-full flex items-center justify-center shadow-[0_5px_20px_rgba(34,211,238,0.25)] hover:bg-[#161b22] hover:border-cyan-300 hover:scale-110 active:scale-95 hover:shadow-[0_8px_25px_rgba(34,211,238,0.35)] transition-all duration-300 focus:outline-none"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Chat icon visible when closed */}
        <div
          className={`absolute transition-all duration-300 transform ${
            isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        >
          <MessageSquare size={24} />
        </div>
        
        {/* Close icon visible when opened */}
        <div
          className={`absolute transition-all duration-300 transform ${
            isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        >
          <X size={24} />
        </div>
      </div>
    </button>
  );
};

export default ChatButton;
