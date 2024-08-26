import React from "react";
import ReactDOM from "react-dom/client";
import { Home, App, AboutUs, ContactUs, MyPath, Github } from "./index.js";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	useLoaderData,
} from "react-router-dom";
import "./index.css";
import { Gitinfo } from "./Components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <AboutUs />,
//       },
//       {
//         path: "contact",
//         element: <ContactUs />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Home />} />
			<Route path="about" element={<AboutUs />} />
			<Route path="contact" element={<ContactUs />} />
			<Route path="user/:userid" element={<MyPath />}></Route>
			<Route path="/github" loader={Gitinfo} element={<Github />}></Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root p-0")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
