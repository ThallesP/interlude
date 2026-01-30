import { createClient } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import type { GenericCtx } from "@convex-dev/better-auth/utils";
import type { BetterAuthOptions } from "better-auth";
import { betterAuth } from "better-auth";
import { components } from "../_generated/api";
import type { DataModel } from "../_generated/dataModel";
import authConfig from "../auth.config";

// Better Auth Component (using NPM package)
export const authComponent = createClient(components.betterAuth, {
	verbose: false,
});

// Better Auth Options
export const createAuthOptions = (ctx: GenericCtx<DataModel>) => {
	return {
		appName: "Interlude",
		baseURL: process.env.SITE_URL,
		secret: process.env.BETTER_AUTH_SECRET,
		database: authComponent.adapter(ctx),
		emailAndPassword: {
			enabled: true,
		},
		plugins: [convex({ authConfig })],
	} satisfies BetterAuthOptions;
};

// For `@better-auth/cli`
export const options = createAuthOptions({} as GenericCtx<DataModel>);

// Better Auth Instance
export const createAuth = (ctx: GenericCtx<DataModel>) => {
	return betterAuth(createAuthOptions(ctx));
};
