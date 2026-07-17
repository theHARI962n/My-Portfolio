import React from "react";

/**
 * A typing indicator showing three bouncing dots to simulate the assistant processing a response.
 */
const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-1.5 bg-[#1f2937]/50 border border-gray-700/30 rounded-2xl px-4 py-2.5 max-w-[70px] self-start">
      <div 
        className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" 
        style={{ animationDelay: "0ms", animationDuration: "0.8s" }}
      />
      <div 
        className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" 
        style={{ animationDelay: "150ms", animationDuration: "0.8s" }}
      />
      <div 
        className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" 
        style={{ animationDelay: "300ms", animationDuration: "0.8s" }}
      />
    </div>
  );
};

export default TypingIndicator;
