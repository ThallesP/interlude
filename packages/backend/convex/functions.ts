import type { UserIdentity } from "convex/server";
import {
	customAction,
	customCtx,
	customMutation,
	customQuery,
} from "convex-helpers/server/customFunctions";
import { action, mutation, query } from "./_generated/server";

/**
 * Authenticated query - throws an error if user is not logged in
 * The user identity is automatically added to the context
 */
export const authedQuery = customQuery(
	query,
	customCtx(async (ctx) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) {
			throw new Error(
				"Unauthorized: You must be logged in to perform this action",
			);
		}
		return { user: identity };
	}),
);

/**
 * Authenticated mutation - throws an error if user is not logged in
 * The user identity is automatically added to the context
 */
export const authedMutation = customMutation(
	mutation,
	customCtx(async (ctx) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) {
			throw new Error(
				"Unauthorized: You must be logged in to perform this action",
			);
		}
		return { user: identity };
	}),
);

/**
 * Authenticated action - throws an error if user is not logged in
 * The user identity is automatically added to the context
 */
export const authedAction = customAction(
	action,
	customCtx(async (ctx) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) {
			throw new Error(
				"Unauthorized: You must be logged in to perform this action",
			);
		}
		return { user: identity };
	}),
);

/**
 * Type helper for the authenticated context
 */
export type AuthedUser = UserIdentity;
