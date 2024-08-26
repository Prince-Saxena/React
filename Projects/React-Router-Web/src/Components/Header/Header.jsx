import React from "react";
import { Link, NavLink } from "react-router-dom";
import useTheme from "../../contexts/ThemeContext";

function Header() {
	const { theme, light, dark } = useTheme();

	const toggleTheme = () => {
		if (theme === "light") {
			dark();
		} else {
			light();
		}
	};

	return (
		<header
			className={`sticky top-0 z-50 shadow-md ${
				theme === "dark" ? "bg-gray-900" : "bg-white"
			}`}
		>
			<nav
				className={`border-gray-200 px-4 lg:px-6 py-2.5 ${
					theme === "dark" ? "bg-gray-800" : "bg-white"
				}`}
			>
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<Link
						to="#"
						className={`flex items-center text-gray-900 dark:text-gray-100 font-bold text-2xl ${
							theme === "dark"
								? "hover:text-orange-500"
								: "transition ease-in-out duration-300 animate-pulse"
						}`}
					>
						Router Web
					</Link>
					<div className="flex items-center lg:order-2">
						<Link
							to="/"
							className={`text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ${
								theme === "dark"
									? "text-white hover:bg-gray-700"
									: "text-gray-800 hover:bg-gray-200"
							}`}
						>
							Log in
						</Link>
						<Link
							to="/"
							className={`text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ${
								theme === "dark"
									? "bg-orange-600 hover:bg-orange-700"
									: "bg-orange-700 hover:bg-orange-800"
							}`}
						>
							Get started
						</Link>
						<button
							onClick={toggleTheme}
							className={`p-2 rounded border-2 ${
								theme === "dark" ? " text-gray-300" : " text-gray-800"
							}`}
						>
							<i className={`${theme === "dark" ? "fas fa-moon" : "fas fa-sun"}`}></i>
						</button>
					</div>
					<div
						className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
						id="mobile-menu-2"
					>
						<ul
							className={`flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ${
								theme === "dark" ? "bg-gray-800" : "bg-white"
							}`}
						>
							<li>
								<NavLink
									to="/"
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
											isActive
												? "text-orange-700"
												: theme === "dark"
												? "text-gray-300"
												: "text-gray-700"
										} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
									}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/about"
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
											isActive
												? "text-orange-700"
												: theme === "dark"
												? "text-gray-300"
												: "text-gray-700"
										} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
									}
								>
									About Us
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/contact"
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
											isActive
												? "text-orange-700"
												: theme === "dark"
												? "text-gray-300"
												: "text-gray-700"
										} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
									}
								>
									Contact Us
								</NavLink>
							</li>
						</ul>
					</div>
					{/* Toggle Button for Dark Mode */}
				</div>
			</nav>
		</header>
	);
}

export default Header;
