import React from "react";
import AddOns from "./components/AddOns";
import Feature from "./components/Feature";
import WorkProcess from "./components/WorkProcess";

const Home = () => {
	return (
		<>
			<WorkProcess />
			<Feature />
			<AddOns />
		</>
	);
};

export default Home;
