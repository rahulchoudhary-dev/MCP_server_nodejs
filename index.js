import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import registerAddTool from "./tools/addTool.js";
import registerGetRecommendationTool from "./tools/getRecommendationTool.js";
import registerSetDemographicsTool from "./tools/setDemographicsTool.js";
import registerGetDemographicsTool from "./tools/getDemographicsTool.js";
import registerGetInputsTool from "./tools/getInputsTool.js";
import registerGreetingTool from "./tools/greetingTool.js";
import registerEchoTool from "./tools/echoTool.js";

const server = new McpServer({
  name: "MCP Server Boilerplate",
  version: "1.0.0",
});

registerAddTool(server);
registerGetRecommendationTool(server);
registerSetDemographicsTool(server);
registerGetDemographicsTool(server);
registerGetInputsTool(server);
registerGreetingTool(server);
registerEchoTool(server);

const transport = new StdioServerTransport();
await server.connect(transport);
