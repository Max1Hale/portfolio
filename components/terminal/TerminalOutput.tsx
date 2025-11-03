export type CommandWithResponse = {
  prompt: string; // Store the full prompt at time of execution
  command: string;
  response: string;
};

type TerminalOutputProps = {
  commands: CommandWithResponse[];
};

export default function TerminalOutput({ commands }: TerminalOutputProps) {
  return (
    <div className="space-y-3">
      {commands.map((val, index) => (
        <div key={index}>
          {val.command !== "" && (
            <div className="flex items-center group">
              <span className="text-blue-400 font-semibold">{val.prompt}</span>
              <span className="ml-2 text-gray-200 group-hover:text-white transition-colors">
                {val.command}
              </span>
            </div>
          )}
          {val.response && (
            <pre
              className="mt-2 whitespace-pre-line overflow-x-auto text-gray-300 leading-relaxed hover:text-gray-100 transition-colors"
              style={{
                fontFamily: "inherit",
                letterSpacing: "0",
                lineHeight: "1.5",
              }}
              dangerouslySetInnerHTML={{ __html: val.response }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
