function Explore({ portfolio }) {
	const port = portfolio.forEach((port) => {
		return (
			<div>
				<h2>{port.name}</h2>
			</div>
		);
	});

	console.log(port);

	return port;
}

export default Explore;
