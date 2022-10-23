import React from "react";
import { Accordion } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import SectionHeader from "../../../components/SectionHeader";
const data = [
	{
		title: `How are we sourcing talents? -`,
		text: `We’re working with our local partner company who is leading the local selection of highly educated talents in Malaysia. We can benefit from their 8 years of experience and local language.`,
	},
	{
		title: `What administrative things will come up?`,
		text: `We’re working with our local partner company who is leading the local selection of highly educated talents in Malaysia. We can benefit from their 8 years of experience and local language.`,
	},
	{
		title: `How do you handle overtime payouts? `,
		text: `We’re working with our local partner company who is leading the local selection of highly educated talents in Malaysia. We can benefit from their 8 years of experience and local language.`,
	},
	{
		title: `Can we change a talents workload from hourly based to full-time? `,
		text: `We’re working with our local partner company who is leading the local selection of highly educated talents in Malaysia. We can benefit from their 8 years of experience and local language.`,
	},
	{
		title: `What's the differnece between Flexible & Commitment`,
		text: `We’re working with our local partner company who is leading the local selection of highly educated talents in Malaysia. We can benefit from their 8 years of experience and local language.`,
	},
	{
		title: `How does the employment setup looks like?`,
		text: `We’re working with our local partner company who is leading the local selection of highly educated talents in Malaysia. We can benefit from their 8 years of experience and local language.`,
	},
];

const Faq = () => {
	return (
		<section className="faq-section">
			<div className="shape"></div>
			<div className="container">
				<SectionHeader
					title="FAQ Questions & Answers"
					className="mb-4 mb-md-5"
				/>
				<div className="__faq">
					<Accordion defaultActiveKey={0}>
						{data &&
							data.map(({ title, text }, i) => (
								<Accordion.Item eventKey={i} key={i}>
									<Accordion.Header>
										{title}
										<span className="minus">
											<AiOutlineMinusCircle />
										</span>
										<span className="plus">
											<AiOutlinePlusCircle />
										</span>
									</Accordion.Header>
									<Accordion.Body>{text}</Accordion.Body>
								</Accordion.Item>
							))}
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default Faq;
