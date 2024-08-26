import React from "react";
import useTheme from "../../contexts/ThemeContext";

export default function About() {
	const { theme } = useTheme();

	return (
		<div className={`py-16 ${theme === "light" ? "bg-white" : "bg-gray-900"}`}>
			<div
				className={`container m-auto px-6 ${
					theme === "light" ? "text-gray-600" : "text-gray-300"
				} md:px-12 xl:px-6`}
			>
				<div
					className={`space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 ${
						theme === "light" ? "" : "bg-gray-800"
					}`}
				>
					<div className="md:5/12 lg:w-5/12">
						<img
							src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
							alt="image"
							className={`w-full ${theme === "light" ? "" : "opacity-70"}`}
						/>
					</div>
					<div className="md:7/12 lg:w-6/12">
						<h2
							className={`text-2xl ${
								theme === "light" ? "text-gray-900" : "text-gray-100"
							} font-bold md:text-4xl`}
						>
							React development is carried out by passionate developers
						</h2>
						<p
							className={`mt-6 ${
								theme === "light" ? "text-gray-600" : "text-gray-400"
							}`}
						>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
							voluptatem accusantium nemo perspiciatis delectus atque autem!
							Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur!
							Officiis id consequatur atque doloremque!
						</p>
						<p
							className={`mt-4 ${
								theme === "light" ? "text-gray-600" : "text-gray-400"
							}`}
						>
							Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
							expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur
							quam mollitia.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
