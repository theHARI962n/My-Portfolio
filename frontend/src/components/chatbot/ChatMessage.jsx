import React from "react";

/**
 * A component representing a single message bubble in the conversation.
 * 
 * @param {Object} props.message - The message object containing text, sender, and timestamp.
 */
const ChatMessage = ({ message }) => {
  const isUser = message.sender === "user";
  
  const timeString = message.timestamp
    ? new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : "";

  return (
    <div className={`flex flex-col gap-1 w-full ${isUser ? "items-end" : "items-start"}`}>
      {/* Message bubble */}
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed border ${
          isUser
            ? "bg-cyan-500/10 text-cyan-200 border-cyan-400/30 rounded-tr-none shadow-[0_2px_10px_rgba(6,182,212,0.05)]"
            : "bg-slate-800/80 text-gray-200 border-gray-700/50 rounded-tl-none shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
        }`}
      >
        {message.text}
      </div>
      
      {/* Time stamp */}
      {timeString && (
        <span className="text-[10px] text-gray-500 px-1">
          {timeString}
        </span>
      )}
    </div>
  );
};

export default ChatMessage;
