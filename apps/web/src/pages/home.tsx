import { convexQuery } from "@convex-dev/react-query";
import { api } from "@interlude/backend";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {
	SignedIn,
	SignedOut,
	UserButton,
} from "@daveyplate/better-auth-ui";

export function HomePage() {
	const { data: _data, error: _error } = useQuery(convexQuery(api.world.world));

	return (
		<div className="flex flex-col items-center justify-center min-h-screen gap-6">
			<h1 className="text-2xl font-bold">Interlude</h1>

			<SignedOut>
				<div className="flex gap-4">
					<Link
						to="/auth/sign-in"
						className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
					>
						Sign In
					</Link>
					<Link
						to="/auth/sign-up"
						className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
					>
						Sign Up
					</Link>
				</div>
			</SignedOut>

			<SignedIn>
				<div className="flex flex-col items-center gap-4">
					<p className="text-muted-foreground">Welcome back!</p>
					<UserButton />
				</div>
			</SignedIn>
		</div>
	);
}
