import { z } from "zod";
import fetch from "node-fetch";

export default function registerSetDemographicsTool(server) {
  server.tool(
    "setDemographics",
    "Set user demographics information.",
    {
      userkey: z.string(),
      weight: z.string(),
      height_ft: z.string(),
      height_in: z.string(),
      zip: z.string(),
      sex: z.string(),
      race: z.string(),
      birthdate: z.string(),
      inputs: z.array(z.object({})),
    },
    async (input) => {
      const url =
        "https://santoriodevapi.salugenius.com/api/data/set/demographics";
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
    },
    {
      prompt:
        "This tool sets user demographics. Provide all required fields (userkey, weight, height_ft, height_in, zip, sex, race, birthdate, inputs) as specified.",
    }
  );
}
