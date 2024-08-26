import React, { useState } from "react";
import useTheme from "../../contexts/ThemeContext"; // Ensure this path is correct

export default function Contact() {
	// Use theme context
	const { theme } = useTheme();

	// State to handle the visibility of additional content
	const [showAdditional, setShowAdditional] = useState(false);

	// Function to toggle the state
	const handleToggle = () => {
		setShowAdditional(!showAdditional);
	};

	return (
		<div
			className={`relative min-h-screen ${
				theme === "light" ? "bg-white" : "bg-gray-900"
			} flex flex-col`}
		>
			{/* Navigation bar */}
			<nav
				className={`sticky top-0 z-50 shadow-lg ${
					theme === "light" ? "bg-white" : "bg-gray-800"
				}`}
			>
				{/* Your navigation code here */}
			</nav>

			{/* Main content */}
			<main className="flex-1 p-6 max-w-6xl mx-auto">
				<div className="mt-8 overflow-hidden">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div
							className={`p-6 rounded-lg ${
								theme === "light" ? "bg-gray-100" : "bg-gray-800"
							}`}
						>
							<h1
								className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
									theme === "light" ? "text-gray-800" : "text-white"
								}`}
							>
								Get in touch:
							</h1>
							<p
								className={`text-lg sm:text-xl font-medium mt-2 ${
									theme === "light" ? "text-gray-600" : "text-gray-300"
								}`}
							>
								Fill in the form to start a conversation
							</p>

							<div className="flex items-center mt-8">
								{/* Address */}
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									viewBox="0 0 24 24"
									className={`w-8 h-8 ${
										theme === "light" ? "text-gray-500" : "text-gray-400"
									}`}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<div
									className={`ml-4 text-md tracking-wide font-semibold w-40 ${
										theme === "light" ? "text-gray-800" : "text-gray-300"
									}`}
								>
									Acme Inc, Street, State, Postal Code
								</div>
							</div>

							<div className="flex items-center mt-4">
								{/* Phone */}
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									viewBox="0 0 24 24"
									className={`w-8 h-8 ${
										theme === "light" ? "text-gray-500" : "text-gray-400"
									}`}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								<div
									className={`ml-4 text-md tracking-wide font-semibold w-40 ${
										theme === "light" ? "text-gray-800" : "text-gray-300"
									}`}
								>
									+44 1234567890
								</div>
							</div>

							<div className="flex items-center mt-2">
								{/* Email */}
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									viewBox="0 0 24 24"
									className={`w-8 h-8 ${
										theme === "light" ? "text-gray-500" : "text-gray-400"
									}`}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<div
									className={`ml-4 text-md tracking-wide font-semibold w-40 ${
										theme === "light" ? "text-gray-800" : "text-gray-300"
									}`}
								>
									info@acme.org
								</div>
							</div>
						</div>

						<form
							className={`p-6 flex flex-col justify-center rounded-lg ${
								theme === "light" ? "bg-gray-100" : "bg-gray-800"
							}`}
						>
							<div className="flex flex-col">
								<label htmlFor="name" className="hidden">
									Full Name
								</label>
								<input
									type="name"
									name="name"
									id="name"
									placeholder="Full Name"
									className={`w-full mt-2 py-3 px-3 rounded-lg border ${
										theme === "light"
											? "bg-white border-gray-400 text-gray-800"
											: "bg-gray-700 border-gray-600 text-gray-200"
									} font-semibold focus:border-orange-500 focus:outline-none`}
								/>
							</div>

							<div className="flex flex-col mt-2">
								<label htmlFor="email" className="hidden">
									Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									className={`w-full mt-2 py-3 px-3 rounded-lg border ${
										theme === "light"
											? "bg-white border-gray-400 text-gray-800"
											: "bg-gray-700 border-gray-600 text-gray-200"
									} font-semibold focus:border-orange-500 focus:outline-none`}
								/>
							</div>

							<div className="flex flex-col mt-2">
								<label htmlFor="tel" className="hidden">
									Number
								</label>
								<input
									type="tel"
									name="tel"
									id="tel"
									placeholder="Telephone Number"
									className={`w-full mt-2 py-3 px-3 rounded-lg border ${
										theme === "light"
											? "bg-white border-gray-400 text-gray-800"
											: "bg-gray-700 border-gray-600 text-gray-200"
									} font-semibold focus:border-orange-500 focus:outline-none`}
								/>
							</div>

							<button
								type="submit"
								className={`md:w-32 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300 ${
									theme === "light" ? "bg-orange-700" : "bg-orange-600"
								}`}
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer
				className={`bg-gray-800 text-white py-4 ${
					theme === "light" ? "bg-gray-800" : "bg-gray-900"
				}`}
			>
				{/* Your footer code here */}
			</footer>
		</div>
	);
}
