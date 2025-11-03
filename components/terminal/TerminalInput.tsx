import { RefObject } from "react";

type TerminalInputProps = {
  prompt: string;
  onCommand: (command: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
};

export default function TerminalInput({
  prompt,
  onCommand,
  inputRef,
}: TerminalInputProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const input = formData.get("terminal-input") as string;
        onCommand(input);
        e.currentTarget.reset();
      }}
      className="mt-4"
    >
      <div className="flex items-center">
        <span className="text-blue-400 font-semibold">{prompt}</span>
        <input
          ref={inputRef}
          name="terminal-input"
          type="text"
          className="flex-1 ml-2 bg-transparent outline-none text-white caret-blue-400 placeholder:text-gray-600"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="Enter a command..."
        />
      </div>
    </form>
  );
}
