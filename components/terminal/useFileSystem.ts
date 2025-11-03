import { useState } from "react";
import { FileSystemNode, fileSystem } from "./FileSystem";

export const useFileSystem = () => {
  const [currentDir, setCurrentDir] = useState<string[]>([]);

  // Navigate file system - traverses the path and returns the node at that location
  const getNode = (path: string[]): FileSystemNode | null => {
    // Start at root
    let currentChildren: { [key: string]: FileSystemNode } = fileSystem;

    // Navigate through each directory in the path
    for (let i = 0; i < path.length; i++) {
      const dirName = path[i];

      // Look up the next node in current directory
      const nextNode = currentChildren[dirName];

      if (!nextNode) {
        // Path doesn't exist
        return null;
      }

      // If this is the last segment, return it (could be file or directory)
      if (i === path.length - 1) {
        return nextNode;
      }

      // Not the last segment, so we need to go deeper
      // This node must be a directory with children
      if (nextNode.type !== "directory" || !nextNode.children) {
        // Can't navigate through a file or empty directory
        return null;
      }

      // Move into this directory
      currentChildren = nextNode.children;
    }

    // If path is empty, this shouldn't be reached, but return null to be safe
    return null;
  };

  const getCurrentNode = (): FileSystemNode => {
    if (currentDir.length === 0) {
      // At root directory
      return { type: "directory", children: fileSystem };
    }

    const node = getNode(currentDir);
    if (!node) {
      // Shouldn't happen if state is valid, but return empty directory as fallback
      return { type: "directory", children: {} };
    }

    return node;
  };

  const getPrompt = () => {
    const path = currentDir.length === 0 ? "~" : `~/${currentDir.join("/")}`;
    return `max@portfolio:${path}$`;
  };

  return {
    currentDir,
    setCurrentDir,
    getNode,
    getCurrentNode,
    getPrompt,
  };
};
