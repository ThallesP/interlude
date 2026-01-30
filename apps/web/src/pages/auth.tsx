import { useParams } from "react-router-dom";
import { AuthView } from "@daveyplate/better-auth-ui";

export function AuthPage() {
	const { path } = useParams<{ path: string }>();

	return (
		<div className="flex min-h-screen items-center justify-center p-4">
			<AuthView pathname={path} />
		</div>
	);
}
