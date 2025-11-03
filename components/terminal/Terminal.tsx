"use client";

import { useRef, useEffect } from "react";
import { useCommandHandler } from "./useCommandHandler";
import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";
import WelcomeBanner from "./WelcomeBanner";

export default function Terminal() {
  const { prevCommands, handleCommand, getPrompt } = useCommandHandler();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-focus input and scroll to bottom
  useEffect(() => {
    inputRef.current?.focus();
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [prevCommands]);

  return (
    <div
      className="h-full max-h-[85vh] w-full max-w-7xl text-xs sm:text-sm flex flex-col rounded-lg border border-blue-500/20 shadow-2xl shadow-blue-900/30 overflow-hidden backdrop-blur-xl bg-slate-900/80 animate-fade-in font-fira-code"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-slate-500/5 pointer-events-none"></div>

      {/* Fixed banner at top */}
      <div className="relative p-3 sm:p-6 pb-2 sm:pb-4 border-b border-slate-700/50">
        <WelcomeBanner />
      </div>

      {/* Scrollable command history and input */}
      <div
        ref={scrollRef}
        className="relative flex-1 overflow-y-auto px-3 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4"
      >
        <TerminalOutput commands={prevCommands} />
        <TerminalInput
          prompt={getPrompt()}
          onCommand={handleCommand}
          inputRef={inputRef}
        />
      </div>
    </div>
  );
}
