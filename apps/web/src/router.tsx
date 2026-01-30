import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./pages/home";
import { NotFoundPage } from "./pages/not-found";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);
