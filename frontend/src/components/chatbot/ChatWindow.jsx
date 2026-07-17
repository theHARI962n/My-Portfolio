import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import ModeSelector from "./ModeSelector";

/**
 * Chat window container holding the header, mode selector, message list, and input box.
 * Animates scale, translate, and opacity dynamically using React states and Tailwind.
 */
const ChatWindow = ({ isOpen, onClose, messages, isTyping, onSend }) => {
  const [activeMode, setActiveMode] = useState("general");

  return (
    <div
      className={`fixed z-50 flex flex-col bg-[#0d1117]/95 backdrop-blur-md border border-cyan-400/20 shadow-2xl transition-all duration-300 transform 
        /* Animation States */
        ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }
        /* Mobile layout (default) */
        w-full h-full bottom-0 right-0 left-0 top-0 max-h-none rounded-none border-none
        /* Tablet & Desktop Layout */
        md:top-auto md:bottom-24 md:right-6 md:left-auto md:w-[380px] md:h-[500px] md:max-h-[600px] md:rounded-2xl md:border md:border-cyan-400/30
      `}
    >
      {/* Header section */}
      <ChatHeader onClose={onClose} />
      
      {/* Mode Selector wrapper */}
      <div className="p-3 bg-[#0f172a] border-b border-cyan-400/10">
        <ModeSelector activeMode={activeMode} onChange={setActiveMode} />
      </div>
      
      {/* Messages scrolling stack */}
      <ChatMessages messages={messages} isTyping={isTyping} />
      
      {/* Text submission input */}
      <ChatInput onSend={(text) => onSend(text, activeMode)} disabled={isTyping} />
    </div>
  );
};

export default ChatWindow;
