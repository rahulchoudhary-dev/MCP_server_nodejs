import { z } from "zod";

export default function registerAddTool(server) {
  server.tool(
    "add",
    "Add two numbers",
    { a: z.number(), b: z.number() },
    async ({ a, b }) => ({
      content: [{ type: "text", text: String(a + b) }],
    }),
    {
      prompt:
        "This tool adds two numbers together. Provide 'a' and 'b' as numbers to get their sum.",
    }
  );
}
