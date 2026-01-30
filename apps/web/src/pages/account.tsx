import { useParams } from "react-router-dom";
import { AccountView } from "@daveyplate/better-auth-ui";

export function AccountPage() {
	const { path } = useParams<{ path: string }>();

	return (
		<div className="container mx-auto max-w-4xl py-10 px-4">
			<AccountView pathname={path} />
		</div>
	);
}
