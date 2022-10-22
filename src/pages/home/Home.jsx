import React from "react";
import AddOns from "./components/AddOns";
import Banner from "./components/Banner";
import Feature from "./components/Feature";
import WorkProcess from "./components/WorkProcess";

const Home = () => {
	return (
		<>
			<Banner />
			<WorkProcess />
			<Feature />
			<AddOns />
		</>
	);
};

export default Home;
