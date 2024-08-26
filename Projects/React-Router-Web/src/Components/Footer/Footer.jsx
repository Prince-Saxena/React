import { Link } from "react-router-dom";
import useTheme from "../../contexts/ThemeContext";

export default function Footer() {
	const { theme } = useTheme();

	return (
		<footer
			className={`${
				theme === "light"
					? "bg-white border-y border-gray-200"
					: "bg-gray-800 border-gray-700"
			}`}
		>
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<Link to="/" className="flex items-center">
							<img
								src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
								className="mr-3 h-16"
								alt="Logo"
							/>
						</Link>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
						<div>
							<h2
								className={`mb-6 text-sm font-semibold ${
									theme === "light" ? "text-gray-900" : "text-gray-100"
								} uppercase`}
							>
								Resources
							</h2>
							<ul
								className={`${
									theme === "light" ? "text-gray-500" : "text-gray-400"
								} font-medium`}
							>
								<li className="mb-4">
									<Link
										to="/"
										className={`${
											theme === "light"
												? "hover:underline"
												: "hover:text-gray-300"
										}`}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										to="/about"
										className={`${
											theme === "light"
												? "hover:underline"
												: "hover:text-gray-300"
										}`}
									>
										About
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2
								className={`mb-6 text-sm font-semibold ${
									theme === "light" ? "text-gray-900" : "text-gray-100"
								} uppercase`}
							>
								Follow us
							</h2>
							<ul
								className={`${
									theme === "light" ? "text-gray-500" : "text-gray-400"
								} font-medium`}
							>
								<li className="mb-4">
									<Link
										to="/github"
										className={`${
											theme === "light"
												? "hover:underline"
												: "hover:text-gray-300"
										}`}
									>
										Github
									</Link>
								</li>
								<li>
									<Link
										to="/"
										className={`${
											theme === "light"
												? "hover:underline"
												: "hover:text-gray-300"
										}`}
									>
										Discord
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2
								className={`mb-6 text-sm font-semibold ${
									theme === "light" ? "text-gray-900" : "text-gray-100"
								} uppercase`}
							>
								Legal
							</h2>
							<ul
								className={`${
									theme === "light" ? "text-gray-500" : "text-gray-400"
								} font-medium`}
							>
								<li className="mb-4">
									<Link
										to="#"
										className={`${
											theme === "light"
												? "hover:underline"
												: "hover:text-gray-300"
										}`}
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										to="#"
										className={`${
											theme === "light"
												? "hover:underline"
												: "hover:text-gray-300"
										}`}
									>
										Terms &amp; Conditions
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr
					className={`${
						theme === "light" ? "border-gray-200" : "border-gray-700"
					} my-6 sm:mx-auto lg:my-8`}
				/>
				<div className="sm:flex sm:items-center sm:justify-between">
					<span
						className={`text-sm ${
							theme === "light" ? "text-gray-500" : "text-gray-400"
						} sm:text-center`}
					>
						© 2023
						<a
							href="https://hiteshchoudhary.com/"
							className={`${
								theme === "light" ? "hover:underline" : "hover:text-gray-300"
							}`}
						>
							Hello
						</a>
						. All Rights Reserved.
					</span>
					<div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
						<Link
							to="#"
							className={`${
								theme === "light" ? "text-gray-500" : "text-gray-400"
							} hover:text-gray-900`}
						>
							<svg
								className="w-4 h-4"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 8 19"
							>
								<path
									fillRule="evenodd"
									d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="sr-only">Facebook page</span>
						</Link>
						<Link
							to="#"
							className={`${theme === "light" ? "text-gray-500" : "text-gray-400"}`}
						>
							<svg
								className="w-4 h-4"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 21 16"
							>
								<path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
							</svg>
							<span className="sr-only">Discord community</span>
						</Link>
						<Link
							to="#"
							className={`${theme === "light" ? "text-gray-500" : "text-gray-400"}`}
						>
							<svg
								className="w-4 h-4"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 17"
							>
								<path
									fillRule="evenodd"
									d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.143 4.143 0 0 0 14.76 0a4.077 4.077 0 0 0-4.081 4.08c0 .319.036.635.1.936a11.573 11.573 0 0 1-8.446-4.254 4.067 4.067 0 0 0-.553 2.045 4.07 4.07 0 0 0 1.803 3.37A4.045 4.045 0 0 1 0 6.54v.051a4.089 4.089 0 0 0 3.287 4.017 4.144 4.144 0 0 1-1.793.067 4.08 4.08 0 0 0 3.81 2.834 8.21 8.21 0 0 1-5.097 1.765c-.333 0-.662-.02-.985-.058a11.594 11.594 0 0 0 6.288 1.837c7.543 0 11.655-6.26 11.655-11.655 0-.178-.004-.355-.011-.53A8.226 8.226 0 0 0 20 1.892Z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="sr-only">Twitter page</span>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
