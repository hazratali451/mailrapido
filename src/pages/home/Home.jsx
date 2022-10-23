import React from "react";
import AddOns from "./components/AddOns";
import Banner from "./components/Banner";
import CustomerSay from "./components/CustomerSay";
import Feature from "./components/Feature";
import GetApp from "./components/GetApp";
import PricingSection from "./components/PricingSection";
import WorkProcess from "./components/WorkProcess";

const Home = () => {
	return (
		<>
			<Banner />
			<WorkProcess />
			<Feature />
			<AddOns />
			<GetApp />
			<CustomerSay />
			<PricingSection />
		</>
	);
};

export default Home;
