import React from "react";
import { X } from "lucide-react";

/**
 * Header section of the chat window.
 * Displays chatbot identity, active online status, and a close button.
 * 
 * @param {Function} props.onClose - Action callback when the close icon is clicked.
 */
const ChatHeader = ({ onClose }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3.5 bg-[#0f172a] border-b border-cyan-400/20 rounded-t-2xl">
      <div className="flex items-center space-x-2.5">
        {/* Avatar with Status Indicator */}
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-400/50 flex items-center justify-center font-bold text-cyan-400 text-xs shadow-[0_0_8px_rgba(34,211,238,0.2)]">
            H
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0f172a] rounded-full animate-pulse"></span>
        </div>
        
        {/* Assistant Details */}
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white tracking-wide leading-tight">AGENT HARI</span>
          <span className="text-[10px] text-cyan-400/70 font-medium">Portfolio Assistant</span>
        </div>
      </div>
      
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close chat window"
        className="text-gray-400 hover:text-white p-1 hover:bg-slate-800 rounded-lg transition-all duration-200"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default ChatHeader;
