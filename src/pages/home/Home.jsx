import React from "react";
import AddOns from "./components/AddOns";
import Banner from "./components/Banner";
import BlogSection from "./components/BlogSection";
import CustomerSay from "./components/CustomerSay";
import Faq from "./components/Faq";
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
			<Faq />
			<BlogSection />
		</>
	);
};

export default Home;
