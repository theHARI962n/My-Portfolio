import React from "react";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import { useAutoScroll } from "../../hooks/useAutoScroll";

/**
 * A container component for the scrollable list of messages in a conversation.
 * Manages auto-scrolling automatically whenever a new message is appended.
 * 
 * @param {Array} props.messages - Array of message objects.
 * @param {boolean} props.isTyping - Status of assistant typing simulator.
 */
const ChatMessages = ({ messages, isTyping }) => {
  // Lock the scroll to the bottom on messages update or typing state toggle
  const scrollRef = useAutoScroll([messages, isTyping]);

  return (
    <div
      ref={scrollRef}
      className="flex-1 overflow-y-auto px-4 py-4 space-y-4 select-text"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#4b5563 #111827",
      }}
    >
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 text-sm space-y-2">
          <p>No messages yet.</p>
          <p className="text-xs">Ask a question to start the conversation!</p>
        </div>
      ) : (
        messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))
      )}
      
      {isTyping && (
        <div className="flex flex-col gap-1 w-full items-start">
          <TypingIndicator />
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
