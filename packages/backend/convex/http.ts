import { httpRouter } from "convex/server";
import { authComponent, createAuth } from "./betterAuth/auth";

const http = httpRouter();

authComponent.registerRoutes(http, createAuth, {
	cors: {
		allowedOrigins: ["http://localhost:5173", "http://localhost:3000"], // TODO: fix cors later on
		allowedHeaders: ["Content-Type", "Authorization"],
	},
});

export default http;
