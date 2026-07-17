import React, { useState } from "react";
import { Send } from "lucide-react";

/**
 * Text input form component positioned at the bottom of the chat window.
 * 
 * @param {Function} props.onSend - Callback invoked when a message is successfully submitted.
 * @param {boolean} props.disabled - Toggles disabled state of input and send button.
 */
const ChatInput = ({ onSend, disabled }) => {
  const [messageText, setMessageText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!messageText.trim() || disabled) return;
    
    onSend(messageText.trim());
    setMessageText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-3 bg-[#0f172a] border-t border-cyan-400/20 rounded-b-2xl"
    >
      {/* Input textbox */}
      <input
        type="text"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        disabled={disabled}
        placeholder={disabled ? "Agent Hari is thinking..." : "Type a message..."}
        className="flex-1 bg-slate-900 border border-cyan-400/20 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 disabled:opacity-60 transition-all placeholder-gray-500"
      />
      
      {/* Submit/Send button */}
      <button
        type="submit"
        disabled={!messageText.trim() || disabled}
        aria-label="Send message"
        className="bg-cyan-400 text-black hover:bg-cyan-300 disabled:bg-slate-800 disabled:text-gray-600 p-2 rounded-lg transition-all active:scale-95 flex items-center justify-center"
      >
        <Send size={16} />
      </button>
    </form>
  );
};

export default ChatInput;
