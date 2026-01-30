import { query } from "./_generated/server";

export const world = query({
	args: {},
	handler: async () => {
		return `World!`;
	},
});
