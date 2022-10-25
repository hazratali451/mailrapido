import React from "react";
import SectionHeader from "../../../components/SectionHeader";

const WorkProcess = () => {
	return (
		<>
			<section className="process-section pt-120 pb-120" data-aos="fade-up">
				<div className="process-shape"></div>
				<div className="container">
					<SectionHeader
						subtitle="Work process"
						title="How its work section"
						text="Smouth and Functional tool to manager the current temp mail,delete, refresh, create That make user experience great, you can be creative"
					/>
					<div className="d-flex flex-wrap justify-content-between">
						<div className="process-item">
							<div className="content" style={{ maxWidth: `244px` }}>
								<div className="sl">01</div>
								<div className="txt">
									Cet a random email, or create a custom one
								</div>
							</div>
						</div>
						<div className="process-item">
							<div className="content">
								<div className="sl">02</div>
								<div className="txt">Go to you site and register</div>
							</div>
							<svg
								className="arrow1"
								width="212"
								height="44"
								viewBox="0 0 212 44"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1.5C32.1667 22.5 117.8 58.5 211 34.5"
									stroke="#4E6AFF"
									strokeWidth="2"
									strokeLinecap="round"
									strokeDasharray="4 4"
								/>
							</svg>
							<svg
								className="arrow2"
								width="212"
								height="44"
								viewBox="0 0 212 44"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 42.4531C32.1667 21.4531 117.8 -14.5469 211 9.45312"
									stroke="#4E6AFF"
									strokeWidth="2"
									strokeLinecap="round"
									strokeDasharray="4 4"
								/>
							</svg>
						</div>
						<div className="process-item">
							<div className="content">
								<div className="sl">03</div>
								<div className="txt">
									Check the message box you will got all you emails
									there.
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default WorkProcess;
