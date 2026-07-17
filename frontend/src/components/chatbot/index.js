import React, { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

/**
 * Main coordinator for the Chatbot feature.
 * Manages conversation messages, open/close states, and simulates typing delays.
 * 
 * NOTE: Written in pure JavaScript (using React.createElement) to comply with
 * the requested "index.js" filename without triggering Vite JSX build errors.
 */
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
  // Set up conversation state with an initial welcoming greeting
  const [messages, setMessages] = useState([
    {
      id: "welcome-msg",
      sender: "assistant",
      text: "Hi! I'm Agent Hari, your portfolio assistant. How can I help you today?",
      timestamp: Date.now(),
    },
  ]);

  /**
   * Handle incoming user message submissions.
   * 
   * @param {string} userText - Message entered by the user.
   */
  const handleSend = async (userText, mode = "general") => {
    // Append the user's message immediately
    const userMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: userText,
      timestamp: Date.now(),
    };

    const currentHistory = [...messages];
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";
      const response = await fetch(`${apiBaseUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userText,
          history: currentHistory,
          mode: mode,
          selectedProject: null
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from backend.");
      }

      const data = await response.json();

      const assistantMessage = {
        id: `assistant-${Date.now()}`,
        sender: "assistant",
        text: data.reply,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = {
        id: `assistant-${Date.now()}`,
        sender: "assistant",
        text: "I'm sorry, I'm having trouble connecting to the server. Please try again later.",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  // Render components using React.createElement to keep index.js a standard JavaScript file
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(ChatButton, { isOpen: isOpen, onClick: () => setIsOpen((prev) => !prev) }),
    React.createElement(ChatWindow, {
      isOpen: isOpen,
      onClose: () => setIsOpen(false),
      messages: messages,
      isTyping: isTyping,
      onSend: handleSend,
    })
  );
};

export default Chatbot;
export { Chatbot };
