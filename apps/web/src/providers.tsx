import type { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { ConvexQueryClient } from "@convex-dev/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import { useNavigate, Link } from "react-router-dom";

import { env } from "@/env";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { authClient } from "@/lib/auth-client";

function AuthLink({
	href,
	children,
	className,
}: { href: string; children: ReactNode; className?: string }) {
	return (
		<Link to={href} className={className}>
			{children}
		</Link>
	);
}

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

export { convex };

export function Providers({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<ConvexBetterAuthProvider client={convex} authClient={authClient}>
				<QueryClientProvider client={queryClient}>
					{children}
					<Toaster />
					<ReactQueryDevtools />
				</QueryClientProvider>
			</ConvexBetterAuthProvider>
		</ThemeProvider>
	);
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const navigate = useNavigate();

	return (
		<AuthUIProvider
			authClient={authClient}
			navigate={(href) => navigate(href)}
			replace={(href) => navigate(href, { replace: true })}
			Link={AuthLink}
		>
			{children}
		</AuthUIProvider>
	);
}
