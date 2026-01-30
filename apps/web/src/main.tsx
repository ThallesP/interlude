import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConvexReactClient } from "convex/react";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { ConvexQueryClient } from "@convex-dev/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import "./index.css";
import { env } from "./env";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";
import { AuthProvider } from "./providers";
import { authClient } from "./lib/auth-client";
import { HomePage } from "./pages/home";
import { NotFoundPage } from "./pages/not-found";
import { AuthPage } from "./pages/auth";
import { AccountPage } from "./pages/account";

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

// Router needs to be inside AuthProvider which uses useNavigate
// So we create the router with a wrapper that includes AuthProvider
const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<AuthProvider>
				<Outlet />
			</AuthProvider>
		),
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "auth/:path",
				element: <AuthPage />,
			},
			{
				path: "account/:path",
				element: <AccountPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<ConvexBetterAuthProvider client={convex} authClient={authClient}>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
					<Toaster />
					<ReactQueryDevtools />
				</QueryClientProvider>
			</ConvexBetterAuthProvider>
		</ThemeProvider>
	</StrictMode>,
);
