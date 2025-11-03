import { useState } from "react";
import { CommandWithResponse } from "./TerminalOutput";
import { useFileSystem } from "./useFileSystem";

export const useCommandHandler = () => {
  const { currentDir, setCurrentDir, getNode, getCurrentNode, getPrompt } =
    useFileSystem();

  const [prevCommands, setPrevCommands] = useState<CommandWithResponse[]>([]);

  const handleCommand = (input: string) => {
    const trimmedInput = input.trim();
    const [command, ...args] = trimmedInput.split(" ");
    let response = "";

    switch (command) {
      case "ls": {
        const node = getCurrentNode();
        if (node.type === "directory" && node.children) {
          const items = Object.entries(node.children).map(([name, item]) => {
            if (item.type === "directory") {
              return `<span class="text-blue-400 font-bold">${name}/</span>`;
            }
            return `<span class="text-gray-300">${name}</span>`;
          });
          response = items.length > 0 ? items.join("  ") : "Empty directory";
        }
        break;
      }

      case "cd": {
        if (args.length === 0 || args[0] === "~") {
          setCurrentDir([]);
          response = "";
        } else if (args[0] === "..") {
          if (currentDir.length > 0) {
            setCurrentDir((prev) => prev.slice(0, -1));
          }
          response = "";
        } else {
          const targetPath = args[0].split("/").filter((p) => p !== "");
          const newPath = [...currentDir];

          for (const dir of targetPath) {
            if (dir === "..") {
              if (newPath.length > 0) {
                newPath.pop();
              }
            } else if (dir !== ".") {
              newPath.push(dir);
            }
          }

          const targetNode = getNode(newPath);
          if (targetNode && targetNode.type === "directory") {
            setCurrentDir(newPath);
            response = "";
          } else {
            response = `<span class="text-red-400">cd: ${args[0]}: No such directory</span>`;
          }
        }
        break;
      }

      case "cat": {
        if (args.length === 0) {
          response = `<span class="text-red-400">cat: missing file operand</span>`;
        } else {
          const node = getCurrentNode();
          if (node.type === "directory" && node.children) {
            const file = node.children[args[0]];
            if (file) {
              if (file.type === "file") {
                response = file.content || "";
              } else {
                response = `<span class="text-red-400">cat: ${args[0]}: Is a directory</span>`;
              }
            } else {
              response = `<span class="text-red-400">cat: ${args[0]}: No such file</span>`;
            }
          }
        }
        break;
      }

      case "pwd": {
        response = `<span class="text-blue-400">/${currentDir.join("/")}</span>`;
        break;
      }

      case "clear": {
        setPrevCommands([]);
        return;
      }

      case "linkedin": {
        window.open("https://www.linkedin.com/in/max-hale/", "_blank");
        response = `<span class="text-green-400">✓</span> <span class="text-blue-400">Opening LinkedIn profile in a new tab...</span>`;
        break;
      }

      case "help": {
        response = `<span class="text-blue-400 font-bold">Available commands:</span>

  <span class="text-blue-400 font-semibold">ls</span>        <span class="text-gray-400">List directory contents</span>
  <span class="text-blue-400 font-semibold">cd</span>        <span class="text-gray-400">Change directory (cd .. to go back, cd ~ or cd to go home)</span>
  <span class="text-blue-400 font-semibold">cat</span>       <span class="text-gray-400">Display file contents</span>
  <span class="text-blue-400 font-semibold">pwd</span>       <span class="text-gray-400">Print working directory</span>
  <span class="text-blue-400 font-semibold">clear</span>     <span class="text-gray-400">Clear terminal screen</span>
  <span class="text-blue-400 font-semibold">linkedin</span>  <span class="text-gray-400">Open LinkedIn profile</span>
  <span class="text-blue-400 font-semibold">help</span>      <span class="text-gray-400">Show this help message</span>

<span class="text-gray-300">Try:</span> <span class="text-blue-400">cat about.txt</span>`;
        break;
      }

      case "": {
        response = "";
        break;
      }

      default: {
        response = `<span class="text-red-400">bash: ${command}: command not found</span>`;
      }
    }

    setPrevCommands((prev) => [
      ...prev,
      {
        prompt: getPrompt(),
        command: trimmedInput,
        response,
      },
    ]);
  };

  return {
    prevCommands,
    handleCommand,
    getPrompt,
  };
};
