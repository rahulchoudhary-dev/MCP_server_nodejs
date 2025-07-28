import { z } from "zod";

export default function registerEchoTool(server) {
  server.tool(
    "echo",
    "Echo back the provided message.",
    {
      message: z.string(),
    },
    async ({ message }) => {
      return {
        content: [{ type: "text", text: message }],
      };
    },
    {
      prompt:
        "This tool echoes back the message you provide. Enter any string in the 'message' field to see it returned.",
    }
  );
}
