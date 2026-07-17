import React from "react";

/**
 * A selector placeholder to toggle chat modes (e.g. Casual vs Technical).
 * Matches the portfolio's glassmorphism and cyan/dark aesthetic.
 */
const ModeSelector = ({ activeMode = "general", onChange }) => {
  const modes = [
    { id: "general", label: "General Q&A" },
    { id: "technical", label: "Technical" }
  ];

  return (
    <div className="flex bg-[#0a0f1d] p-1 rounded-lg border border-cyan-400/20 text-xs w-full">
      {modes.map((mode) => {
        const isActive = activeMode === mode.id;
        return (
          <button
            key={mode.id}
            onClick={() => onChange && onChange(mode.id)}
            className={`flex-1 py-1 px-2 rounded-md transition-all duration-300 font-medium ${
              isActive
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/30"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {mode.label}
          </button>
        );
      })}
    </div>
  );
};

export default ModeSelector;
