import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import { useNavigate, NavLink } from "react-router-dom";
import type { ReactNode } from "react";

import { authClient } from "@/lib/auth-client";

export function AuthProvider({ children }: { children: ReactNode }) {
	const navigate = useNavigate();

	return (
		<AuthUIProvider
			authClient={authClient}
			navigate={(href) => navigate(href)}
			replace={(href) => navigate(href, { replace: true })}
			Link={NavLink}
		>
			{children}
		</AuthUIProvider>
	);
}
