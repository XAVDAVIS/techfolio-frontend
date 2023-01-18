import { Route, Routes } from "react-router-dom";
import Explore from "../pages/Explore";
import { useEffect, useState } from "react";

function Main(props) {
	//Creating state for portfolio
	const [portfolio, setPortfolio] = useState(null);
	const url = "http://localhost:4000/portfolio/";

	const getPortfolio = async () => {
		const response = await fetch(url);
		const data = await response.json();
		setPortfolio(data);
	};

	useEffect(() => {
		getPortfolio();
	}, []);

	return (
		<main>
			<Routes>
				<Route path="/explore" element={<Explore portfolio={portfolio} />} />
			</Routes>
		</main>
	);
}

export default Main;
