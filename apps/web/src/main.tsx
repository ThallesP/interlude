import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import "./index.css";
import { Providers, AuthProvider } from "./providers";
import { HomePage } from "./pages/home";
import { NotFoundPage } from "./pages/not-found";
import { AuthPage } from "./pages/auth";
import { AccountPage } from "./pages/account";

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
		<Providers>
			<RouterProvider router={router} />
		</Providers>
	</StrictMode>,
);
