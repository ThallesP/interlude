import { AuthView } from "@daveyplate/better-auth-ui";
import { useParams } from "react-router-dom";

export function AuthPage() {
	const { path } = useParams<{ path: string }>();

	return (
		<div className="flex min-h-screen items-center justify-center p-4">
			<AuthView pathname={path} />
		</div>
	);
}
