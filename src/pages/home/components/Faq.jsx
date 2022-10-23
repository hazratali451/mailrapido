import React from "react";
import { Accordion } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import SectionHeader from "../../../components/SectionHeader";

import { Link } from "react-router-dom";
import avatar from "../../../assets/images/faq-avatar.png";
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
				<div className="__still-faq text-center">
					<img src={avatar} alt="" />
					<h5>Still have questions?</h5>
					<div>
						Can’t find the answer you’re looking for? Please chat to our
						friendly team.
					</div>
					<Link to="#" className="btn--base">
						<span>Get in touch</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Faq;
