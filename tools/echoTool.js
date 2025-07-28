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
    }
  );
}
