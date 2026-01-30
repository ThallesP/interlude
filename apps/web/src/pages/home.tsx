import { SignedIn, SignedOut, UserButton } from "@daveyplate/better-auth-ui";
import {
	ArrowRight,
	Bot,
	Code2,
	GitFork,
	Layers,
	Lock,
	Sparkles,
	Terminal,
	Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* Animated grid background */}
			<div className="fixed inset-0 pointer-events-none">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
			</div>

			{/* Navigation */}
			<nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 border-b border-border/50 backdrop-blur-sm">
				<Link to="/" className="flex items-center gap-2 group">
					<div className="w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
						<span className="text-primary text-sm font-bold">λ</span>
					</div>
					<span className="text-lg font-bold tracking-tight">Interlude</span>
				</Link>

				<div className="flex items-center gap-6">
					<a
						href="https://github.com/interlude"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:flex items-center gap-1.5"
					>
						<GitFork className="w-3.5 h-3.5" />
						GitHub
					</a>
					<Link
						to="/docs"
						className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
					>
						Docs
					</Link>

					<SignedOut>
						<div className="flex items-center gap-3">
							<Link
								to="/auth/sign-in"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Sign In
							</Link>
							<Link
								to="/auth/sign-up"
								className="px-4 py-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors border border-primary/50"
							>
								Get Started
							</Link>
						</div>
					</SignedOut>

					<SignedIn>
						<div className="flex items-center gap-3">
							<Link
								to="/dashboard"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Dashboard
							</Link>
							<UserButton />
						</div>
					</SignedIn>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="relative z-10 px-6 py-24 md:px-12 lg:px-20 md:py-32">
				<div className="max-w-5xl mx-auto">
					<div className="animate-fade-down animate-duration-700">
						<div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs border border-primary/30 bg-primary/5 text-primary">
							<Sparkles className="w-3 h-3" />
							<span>Open source & free forever</span>
						</div>
					</div>

					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-down animate-duration-700 animate-delay-100">
						<span className="block">Skip the frontend,</span>
						<span className="block bg-linear-to-r from-primary via-violet-400 to-primary bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
							ship the tool
						</span>
					</h1>

					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-fade-down animate-duration-700 animate-delay-200">
						Interlude turns your TypeScript functions into polished internal
						tools. Perfect for AI-assisted development—no frontend tokens
						wasted.
					</p>

					<div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-down animate-duration-700 animate-delay-300">
						<a
							href="https://github.com/interlude"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all border border-primary/50"
						>
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<title>GitHub</title>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								/>
							</svg>
							<span>Star on GitHub</span>
							<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
						</a>
						<Link
							to="/docs"
							className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground hover:text-foreground"
						>
							<Terminal className="w-4 h-4" />
							<span>Read the Docs</span>
						</Link>
					</div>
				</div>
			</section>

			{/* Code Preview Section */}
			<section className="relative z-10 px-6 py-16 md:px-12 lg:px-20">
				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-8 items-stretch">
						{/* Code Panel */}
						<div className="relative animate-fade-right animate-duration-700 animate-delay-500">
							<div className="absolute -inset-px bg-linear-to-b from-primary/20 to-transparent opacity-50" />
							<div className="relative bg-card border border-border">
								<div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
									<div className="flex gap-1.5">
										<div className="w-3 h-3 rounded-full bg-red-500/60" />
										<div className="w-3 h-3 rounded-full bg-yellow-500/60" />
										<div className="w-3 h-3 rounded-full bg-green-500/60" />
									</div>
									<span className="text-xs text-muted-foreground ml-2">
										create-user.ts
									</span>
								</div>
								<pre className="p-4 text-sm overflow-x-auto">
									<code>
										<span className="text-violet-400">import</span>
										<span className="text-foreground">
											{" "}
											{"{"} Action, io {"}"}{" "}
										</span>
										<span className="text-violet-400">from</span>
										<span className="text-green-400"> "@interlude/sdk"</span>
										<span className="text-muted-foreground">;</span>
										{"\n\n"}
										<span className="text-violet-400">export default new</span>
										<span className="text-yellow-400"> Action</span>
										<span className="text-foreground">({"{"}</span>
										{"\n"}
										<span className="text-foreground">{"  "}name: </span>
										<span className="text-green-400">"Create user"</span>
										<span className="text-muted-foreground">,</span>
										{"\n"}
										<span className="text-foreground">{"  "}handler: </span>
										<span className="text-violet-400">async</span>
										<span className="text-foreground"> () =&gt; {"{"}</span>
										{"\n"}
										<span className="text-foreground">{"    "}</span>
										<span className="text-violet-400">const</span>
										<span className="text-blue-400"> email</span>
										<span className="text-foreground"> = </span>
										<span className="text-violet-400">await</span>
										<span className="text-foreground"> io.input.</span>
										<span className="text-yellow-400">email</span>
										<span className="text-foreground">(</span>
										<span className="text-green-400">"Email"</span>
										<span className="text-foreground">);</span>
										{"\n"}
										<span className="text-foreground">{"    "}</span>
										<span className="text-violet-400">const</span>
										<span className="text-blue-400"> role</span>
										<span className="text-foreground"> = </span>
										<span className="text-violet-400">await</span>
										<span className="text-foreground"> io.</span>
										<span className="text-yellow-400">select</span>
										<span className="text-foreground">(</span>
										<span className="text-green-400">"Role"</span>
										<span className="text-foreground">, [</span>
										{"\n"}
										<span className="text-foreground">{"      "}</span>
										<span className="text-green-400">"Admin"</span>
										<span className="text-muted-foreground">,</span>
										<span className="text-green-400"> "Member"</span>
										{"\n"}
										<span className="text-foreground">{"    "}]);</span>
										{"\n\n"}
										<span className="text-foreground">{"    "}</span>
										<span className="text-violet-400">await</span>
										<span className="text-foreground"> </span>
										<span className="text-yellow-400">createUser</span>
										<span className="text-foreground">
											({"{"} email, role {"}"});
										</span>
										{"\n"}
										<span className="text-foreground">
											{"  "}
											{"}"}
										</span>
										{"\n"}
										<span className="text-foreground">{"})"}</span>
										<span className="text-muted-foreground">;</span>
									</code>
								</pre>
							</div>
							<div className="absolute -bottom-4 left-4 right-4 h-8 bg-linear-to-b from-background/0 to-background" />
						</div>

						{/* UI Preview Panel */}
						<div className="relative animate-fade-left animate-duration-700 animate-delay-700">
							<div className="absolute -inset-px bg-linear-to-b from-primary/20 to-transparent opacity-50" />
							<div className="relative bg-card border border-border h-full">
								<div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
									<div className="flex gap-1.5">
										<div className="w-3 h-3 rounded-full bg-red-500/60" />
										<div className="w-3 h-3 rounded-full bg-yellow-500/60" />
										<div className="w-3 h-3 rounded-full bg-green-500/60" />
									</div>
									<span className="text-xs text-muted-foreground ml-2">
										interlude.app/tools/create-user
									</span>
								</div>
								<div className="p-6">
									<h3 className="text-lg font-semibold mb-6">Create user</h3>

									<div className="space-y-4">
										<div>
											<label
												htmlFor="demo-email"
												className="block text-sm text-muted-foreground mb-2"
											>
												Email
											</label>
											<div className="relative">
												<input
													id="demo-email"
													type="email"
													value="alex@company.com"
													readOnly
													className="w-full px-3 py-2 bg-muted/50 border border-border text-sm focus:outline-none focus:border-primary/50"
												/>
												<div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-4 bg-primary animate-pulse" />
											</div>
										</div>

										<div>
											<label
												htmlFor="demo-role"
												className="block text-sm text-muted-foreground mb-2"
											>
												Role
											</label>
											<div className="relative">
												<select
													id="demo-role"
													className="w-full px-3 py-2 bg-muted/50 border border-border text-sm appearance-none focus:outline-none focus:border-primary/50"
												>
													<option>Admin</option>
													<option>Member</option>
												</select>
												<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
													<svg
														className="w-4 h-4 text-muted-foreground"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<title>Chevron Down</title>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M19 9l-7 7-7-7"
														/>
													</svg>
												</div>
											</div>
										</div>

										<button
											type="button"
											className="w-full mt-4 px-4 py-2.5 bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors"
										>
											Create user
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Connection indicator */}
					<div className="hidden lg:flex items-center justify-center mt-6 relative z-20">
						<div className="flex items-center gap-2 px-4 py-2 bg-card border border-border text-xs text-muted-foreground">
							<Code2 className="w-3.5 h-3.5 text-primary" />
							<span>TypeScript in, UI out</span>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="relative z-10 px-6 py-24 md:px-12 lg:px-20 border-t border-border/50">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
							The boring parts, handled
						</h2>
						<p className="text-muted-foreground max-w-xl mx-auto">
							You write the logic that matters. Interlude deals with forms,
							validation, layouts, and all the tedious UI work.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<FeatureCard
							icon={<Code2 className="w-5 h-5" />}
							title="Pure TypeScript"
							description="No config files, no YAML, no visual builders. Just async functions in your codebase with full type safety."
						/>
						<FeatureCard
							icon={<Zap className="w-5 h-5" />}
							title="Reactive UI"
							description="Each await generates a form field. When users submit, your code continues. Simple as that."
						/>
						<FeatureCard
							icon={<Bot className="w-5 h-5" />}
							title="AI-Optimized"
							description="Backend-only means fewer tokens, faster AI completions, and less context for your copilot to juggle."
						/>
						<FeatureCard
							icon={<Layers className="w-5 h-5" />}
							title="Rich Inputs"
							description="Text, dates, selects, file uploads, tables, and more. All through simple io.* method calls."
						/>
						<FeatureCard
							icon={<Lock className="w-5 h-5" />}
							title="Auth Built In"
							description="User management, team roles, and permissions come standard. Configure who can run what."
						/>
						<FeatureCard
							icon={<GitFork className="w-5 h-5" />}
							title="Open Source"
							description="MIT licensed, free forever. Self-host on Docker, Kubernetes, or anywhere Node runs."
						/>
					</div>
				</div>
			</section>

			{/* AI Section */}
			<section className="relative z-10 px-6 py-24 md:px-12 lg:px-20 border-t border-border/50 bg-primary/2">
				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs border border-primary/30 bg-primary/5 text-primary">
								<Bot className="w-3 h-3" />
								<span>Built for AI-assisted coding</span>
							</div>

							<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
								Let AI focus on logic,
								<br />
								<span className="text-primary">not layout</span>
							</h2>

							<p className="text-muted-foreground mb-8 leading-relaxed">
								When you use AI coding assistants, every token matters.
								Interlude eliminates the need to generate React components, CSS
								classes, or HTML markup—so your AI can focus entirely on the
								business logic that actually matters.
							</p>

							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<div className="w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
										<Zap className="w-4 h-4 text-primary" />
									</div>
									<div>
										<h4 className="font-semibold mb-1">Fewer tokens burned</h4>
										<p className="text-sm text-muted-foreground">
											No JSX, no Tailwind, no styling debates. Just pure
											TypeScript logic in a fraction of the context window.
										</p>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<div className="w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
										<Bot className="w-4 h-4 text-primary" />
									</div>
									<div>
										<h4 className="font-semibold mb-1">
											AI agents ship faster
										</h4>
										<p className="text-sm text-muted-foreground">
											Cursor, Copilot, Claude—they all work better when they
											don't have to context-switch between frontend and backend.
										</p>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<div className="w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
										<Code2 className="w-4 h-4 text-primary" />
									</div>
									<div>
										<h4 className="font-semibold mb-1">
											Smaller, auditable codebase
										</h4>
										<p className="text-sm text-muted-foreground">
											Less code means less to review, less to maintain, and less
											surface area for bugs. Perfect for vibe coding.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Token comparison visual */}
						<div className="relative">
							<div className="absolute -inset-px bg-linear-to-b from-primary/20 to-transparent opacity-50" />
							<div className="relative bg-card border border-border p-6">
								<div className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
									Token comparison
								</div>

								<div className="space-y-6">
									<div>
										<div className="flex items-center justify-between mb-2">
											<span className="text-sm">Traditional React admin</span>
											<span className="text-sm text-muted-foreground">
												~2,400 tokens
											</span>
										</div>
										<div className="h-3 bg-muted/50 overflow-hidden">
											<div className="h-full bg-red-500/60 w-full" />
										</div>
										<div className="flex gap-1 mt-2 text-xs text-muted-foreground">
											<span className="px-1.5 py-0.5 bg-muted/50">
												components
											</span>
											<span className="px-1.5 py-0.5 bg-muted/50">hooks</span>
											<span className="px-1.5 py-0.5 bg-muted/50">styles</span>
											<span className="px-1.5 py-0.5 bg-muted/50">types</span>
											<span className="px-1.5 py-0.5 bg-muted/50">logic</span>
										</div>
									</div>

									<div>
										<div className="flex items-center justify-between mb-2">
											<span className="text-sm">Interlude action</span>
											<span className="text-sm text-primary">~180 tokens</span>
										</div>
										<div className="h-3 bg-muted/50 overflow-hidden">
											<div className="h-full bg-primary w-[7.5%]" />
										</div>
										<div className="flex gap-1 mt-2 text-xs text-muted-foreground">
											<span className="px-1.5 py-0.5 bg-primary/20 text-primary">
												logic only
											</span>
										</div>
									</div>
								</div>

								<div className="mt-6 pt-6 border-t border-border">
									<div className="flex items-center justify-between">
										<span className="text-sm text-muted-foreground">
											Token reduction
										</span>
										<span className="text-2xl font-bold text-primary">
											~92% less
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* How it works */}
			<section className="relative z-10 px-6 py-24 md:px-12 lg:px-20 border-t border-border/50">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
							From function to interface
						</h2>
						<p className="text-muted-foreground">
							Three steps, zero frontend code
						</p>
					</div>

					<div className="space-y-12">
						<StepCard
							number="01"
							title="Define your action"
							description="Create an async handler. Use io methods to pause execution and wait for user input—forms, confirmations, file uploads, whatever your workflow needs."
							code={`import { Action, io } from "@interlude/sdk";

export default new Action({
  name: "Refund order",
  handler: async () => {
    const orderId = await io.input.text("Order ID");
    const reason = await io.select("Reason", [
      "Damaged", "Wrong item", "Other"
    ]);
    
    await processRefund(orderId, reason);
    return io.message("Done!");
  }
});`}
						/>

						<StepCard
							number="02"
							title="Run the server"
							description="Start Interlude locally or deploy it anywhere. It scans your actions and generates a web UI that your team can access immediately."
							code={`# Local development
npx interlude dev

# Production with Docker
docker run -p 3000:3000 \\
  -v ./actions:/app/actions \\
  ghcr.io/interlude/server`}
						/>

						<StepCard
							number="03"
							title="Control access"
							description="Set up who can see and run each action. Interlude logs every execution so you have a full audit trail."
							code={`// in interlude.config.ts
export default {
  actions: {
    "refund-order": {
      roles: ["support", "admin"]
    },
    "delete-user": {
      roles: ["admin"]
    }
  }
};`}
						/>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="relative z-10 px-6 py-24 md:px-12 lg:px-20 border-t border-border/50">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
						Your internal tools deserve better
					</h2>
					<p className="text-muted-foreground mb-8 max-w-xl mx-auto">
						Stop duct-taping admin panels together. Interlude is open source,
						free, and ready for your next workflow.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<a
							href="https://github.com/interlude"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all border border-primary/50 text-lg"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<title>GitHub</title>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								/>
							</svg>
							<span>Get Started on GitHub</span>
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</a>
						<Link
							to="/docs"
							className="inline-flex items-center gap-2 px-8 py-4 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground hover:text-foreground text-lg"
						>
							<Terminal className="w-5 h-5" />
							<span>Read the Docs</span>
						</Link>
					</div>
				</div>
			</section>

			{/* Inspiration Credit */}
			<section className="relative z-10 px-6 py-12 md:px-12 lg:px-20 border-t border-border/50">
				<div className="max-w-3xl mx-auto text-center">
					<p className="text-sm text-muted-foreground">
						Interlude is inspired by{" "}
						<a
							href="https://interval.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							Interval
						</a>
						, a pioneering tool for building internal apps with backend code.
						Unfortunately, it was acquired by a company that doesn't maintain it
						anymore.
					</p>
				</div>
			</section>

			{/* Footer */}
			<footer className="relative z-10 px-6 py-8 md:px-12 lg:px-20 border-t border-border/50">
				<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="flex items-center gap-2">
						<div className="w-6 h-6 bg-primary/10 border border-primary/30 flex items-center justify-center">
							<span className="text-primary text-xs font-bold">λ</span>
						</div>
						<span className="text-sm text-muted-foreground">
							Interlude — Open source internal tooling
						</span>
					</div>

					<div className="flex items-center gap-6 text-sm text-muted-foreground">
						<Link
							to="/docs"
							className="hover:text-foreground transition-colors"
						>
							Docs
						</Link>
						<a
							href="https://github.com/interlude"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-foreground transition-colors"
						>
							GitHub
						</a>
						<a
							href="https://interval.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-foreground transition-colors"
						>
							Inspired by Interval
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

function FeatureCard({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div className="group p-6 border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all">
			<div className="w-10 h-10 mb-4 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
				{icon}
			</div>
			<h3 className="font-semibold mb-2">{title}</h3>
			<p className="text-sm text-muted-foreground leading-relaxed">
				{description}
			</p>
		</div>
	);
}

function StepCard({
	number,
	title,
	description,
	code,
}: {
	number: string;
	title: string;
	description: string;
	code: string;
}) {
	return (
		<div className="grid lg:grid-cols-2 gap-6 items-start">
			<div>
				<div className="inline-flex items-center gap-3 mb-4">
					<span className="text-4xl font-bold text-primary/30">{number}</span>
					<h3 className="text-xl font-semibold">{title}</h3>
				</div>
				<p className="text-muted-foreground leading-relaxed">{description}</p>
			</div>
			<div className="relative">
				<div className="absolute -inset-px bg-linear-to-b from-primary/10 to-transparent opacity-50" />
				<div className="relative bg-card border border-border">
					<div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-muted/30">
						<div className="flex gap-1">
							<div className="w-2 h-2 rounded-full bg-red-500/60" />
							<div className="w-2 h-2 rounded-full bg-yellow-500/60" />
							<div className="w-2 h-2 rounded-full bg-green-500/60" />
						</div>
					</div>
					<pre className="p-4 text-xs overflow-x-auto text-muted-foreground">
						<code>{code}</code>
					</pre>
				</div>
			</div>
		</div>
	);
}
