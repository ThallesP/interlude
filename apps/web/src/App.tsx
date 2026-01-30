import { convexQuery } from "@convex-dev/react-query";
import { api } from "@interlude/backend";
import { useQuery } from "@tanstack/react-query";

export function App() {
	const { data, error } = useQuery(convexQuery(api.world.world));

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="font-medium">Hello World</div>
		</div>
	);
}

export default App;
