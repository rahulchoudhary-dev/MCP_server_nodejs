import { z } from "zod";
import fetch from "node-fetch";

export default function registerGetDemographicsTool(server) {
  server.tool(
    "getDemographics",
    "Get user demographics information.",
    {
      userkey: z.string(),
    },
    async ({ userkey }) => {
      const url =
        "https://santoriodevapi.salugenius.com/api/data/get/demographics";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userkey }),
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
