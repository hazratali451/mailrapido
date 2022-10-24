import React from "react";
import PageHeader from "../../components/PageHeader";
import ContactSection from "./components/ContactSection";

const Contact = () => {
	return (
		<>
			<PageHeader
				title="Contact Us"
				text="We are here to help, if you are faced any issue or having a suggesting just send to you a message using this form"
			/>
			<ContactSection />
		</>
	);
};

export default Contact;
