import { setupServer, SetupServerApi } from "msw/node";
import { handlers } from "./handlers";

// setting up mock server
export const server: SetupServerApi = setupServer(...handlers);
