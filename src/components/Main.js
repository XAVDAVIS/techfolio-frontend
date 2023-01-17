import { Route, Routes } from "react-router-dom";
import Explore from "../pages/Explore";
import { useState } from "react";

function Main(props) {
	//Creating state for portfolio
	const [portfolio, setPortfolio] = useState(null);
	const url = "http://localhost:4000";

	return (
		<main>
			<Routes>
				<Route path="/explore" element={<Explore />} />
			</Routes>
		</main>
	);
}

export default Main;
