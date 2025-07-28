import { z } from "zod";

export default function registerGreetingTool(server) {
  server.tool(
    "greeting",
    "Return a personalized greeting message.",
    {
      name: z.string(),
    },
    async ({ name }) => {
      return {
        content: [
          { type: "text", text: `Hello, ${name}! Welcome to the MCP server.` },
        ],
      };
    }
  );
}
