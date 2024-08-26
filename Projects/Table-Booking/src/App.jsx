import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [restaurants, setRestaurants] = useState([]);
	const [selectedRestaurant, setSelectedRestaurant] = useState("");
	const [filterLocation, setFilterLocation] = useState("");
	const [filterCuisine, setFilterCuisine] = useState("");

	useEffect(() => {
		// localStorage.clear();
		const savedRestaurants = localStorage.getItem("restaurants");
		if (savedRestaurants) {
			setRestaurants(JSON.parse(savedRestaurants));
		} else {
			fetch("/src/assets/restro.json")
				.then((response) => {
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
					return response.json();
				})
				.then((data) => {
					setRestaurants(data.restaurants);
					localStorage.setItem("restaurants", JSON.stringify(data.restaurants));
				})
				.catch((error) => console.error("Error fetching data:", error));
		}

		const storedRestaurantId = localStorage.getItem("selectedRestaurant");
		if (storedRestaurantId) {
			setSelectedRestaurant(storedRestaurantId);
		}
	}, []);

	const handleChange = (e) => {
		setSelectedRestaurant(e.target.value);
		localStorage.setItem("selectedRestaurant", e.target.value);
	};

	const handleFilterLocationChange = (e) => {
		setFilterLocation(e.target.value);
	};

	const handleFilterCuisineChange = (e) => {
		setFilterCuisine(e.target.value);
	};

	const handleBooking = () => {
		if (!selectedRestaurant) {
			alert("Please select a restaurant");
			return;
		}

		const selectedResto = restaurants.find(
			(resto) => resto.id === parseInt(selectedRestaurant, 10)
		);

		if (!selectedResto) {
			alert("Invalid restaurant selection");
			return;
		}

		if (selectedResto.free_tables <= 0) {
			alert("No free tables available at the selected restaurant");
			return;
		}

		// Update the free tables and persist in local storage
		selectedResto.free_tables -= 1;
		setRestaurants(
			restaurants.map((resto) => (resto.id === selectedResto.id ? selectedResto : resto))
		);
		localStorage.setItem("restaurants", JSON.stringify(restaurants));

		alert(`Table booked successfully at ${selectedResto.name}`);
	};

	const filteredRestaurants = restaurants.filter(
		(restaurant) =>
			(filterLocation ? restaurant.location === filterLocation : true) &&
			(filterCuisine ? restaurant.cuisine === filterCuisine : true)
	);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
			<h1 className="text-3xl font-bold mb-6">Book Your Table</h1>
			<div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
				<div className="flex items-center mb-4">
					<label htmlFor="date" className="w-1/3 text-sm font-medium text-gray-700">
						Date
					</label>
					<input
						type="date"
						name="date"
						id="date"
						className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
					/>
				</div>
				<div className="flex items-center mb-4">
					<label htmlFor="time" className="w-1/3 text-sm font-medium text-gray-700">
						Time
					</label>
					<input
						type="time"
						name="time"
						id="time"
						className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
					/>
				</div>
				<div className="flex items-center mb-4">
					<label
						htmlFor="filterLocation"
						className="w-1/3 text-sm font-medium text-gray-700"
					>
						Location
					</label>
					<select
						name="filterLocation"
						id="filterLocation"
						className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
						onChange={handleFilterLocationChange}
						value={filterLocation}
					>
						<option value="">Select Location</option>
						{Array.from(
							new Set(restaurants.map((restaurant) => restaurant.location))
						).map((location, index) => (
							<option key={index} value={location}>
								{location}
							</option>
						))}
					</select>
				</div>
				<div className="flex items-center mb-4">
					<label
						htmlFor="filterCuisine"
						className="w-1/3 text-sm font-medium text-gray-700"
					>
						Cuisine
					</label>
					<select
						name="filterCuisine"
						id="filterCuisine"
						className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
						onChange={handleFilterCuisineChange}
						value={filterCuisine}
					>
						<option value="">Select Cuisine</option>
						{Array.from(
							new Set(restaurants.map((restaurant) => restaurant.cuisine))
						).map((cuisine, index) => (
							<option key={index} value={cuisine}>
								{cuisine}
							</option>
						))}
					</select>
				</div>
				<div className="flex items-center mb-4">
					<label
						htmlFor="restaurant"
						className="w-1/3 text-sm font-medium text-gray-700 mr-4"
					>
						Restaurant
					</label>
					<select
						name="restaurant"
						id="restaurant"
						className="mt-1 block w-72 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
						onChange={handleChange}
						value={selectedRestaurant}
					>
						<option value="">Select Restaurant</option>
						{filteredRestaurants.map((restaurant) => (
							<option key={restaurant.id} value={restaurant.id}>
								{`${restaurant.name} (Tables: ${restaurant.free_tables}, Cuisine: ${restaurant.cuisine})`}
							</option>
						))}
					</select>
				</div>
				<button
					className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full py-2 rounded-md text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition duration-300"
					onClick={handleBooking}
				>
					Book
				</button>
			</div>
		</div>
	);
}

export default App;
