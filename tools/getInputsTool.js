import { z } from "zod";
import fetch from "node-fetch";

export default function registerGetInputsTool(server) {
  server.tool(
    "getInputs",
    "Get inputs data for a user.",
    {
      userkey: z.string(),
      inputs: z.array(
        z.object({
          input_id: z.number(),
          value: z.string(),
          actual: z.string().optional(),
        })
      ),
      lane: z.number(),
      lanes: z.array(z.number()),
      page: z.number(),
      answered: z.string(),
    },
    async (input) => {
      const url = "https://santoriodevapi.salugenius.com/api/data/get/inputs";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      if (!response.ok) {
        return {
          content: [
            {
              type: "text",
              text: `Error: ${response.status} ${response.statusText}`,
            },
          ],
        };
      }
      const data = await response.json();
      return {
        content: [{ type: "text", text: JSON.stringify(data) }],
      };
    }
  );
}
