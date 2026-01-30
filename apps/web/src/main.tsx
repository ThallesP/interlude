import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConvexReactClient } from "convex/react";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { ConvexQueryClient } from "@convex-dev/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { env } from "./env";
import { ThemeProvider } from "./components/theme-provider";
import { router } from "./router";
import { authClient } from "./lib/auth-client";

const convex = new ConvexReactClient(env.VITE_CONVEX_URL);
const convexQueryClient = new ConvexQueryClient(convex);
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			queryKeyHashFn: convexQueryClient.hashFn(),
			queryFn: convexQueryClient.queryFn(),
		},
	},
});
convexQueryClient.connect(queryClient);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<ConvexBetterAuthProvider client={convex} authClient={authClient}>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
					<ReactQueryDevtools />
				</QueryClientProvider>
			</ConvexBetterAuthProvider>
		</ThemeProvider>
	</StrictMode>,
);
