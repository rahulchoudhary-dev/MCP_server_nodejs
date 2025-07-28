import { z } from "zod";
import fetch from "node-fetch";

export default function registerGetRecommendationTool(server) {
  server.tool(
    "getRecommendation",
    "Get recommendations for a user key",
    { usrkey: z.string() },
    async ({ usrkey }) => {
      const url =
        "https://santoriodevapi.salugenius.com/api/data/get/recommendations?page=1&limit=10";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userkey: usrkey }),
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
