import React from "react";
import { Link } from "react-router-dom";
import check from "../../../assets/images/pricing-plan/check.svg";
import pricing_bg from "../../../assets/images/pricing-plan/pricing-bg.png";
import SectionHeader from "../../../components/SectionHeader";

const PricingSection = () => {
	return (
		<>
			<section className="pricing-section">
				<div
					className="pricing-shape"
					style={{
						background: `url(${pricing_bg}) no-repeat top center / cover`,
					}}
				></div>
				<div className="container">
					<SectionHeader
						className="pricing-section-header"
						subtitle="Pricing"
						title="The right price for you, whoever you are"
						text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum. "
					/>
					<div className="__pricing" data-aos="fade-up">
						<div className="__pricing-item">
							<div className="__pricing-item-top">
								<h6 className="name">Public</h6>
								<div className="price">
									<span className="symbol">$</span>
									<h3 className="amount">0</h3>
									<small>/Month</small>
								</div>
							</div>
							<div className="__pricing-item-bottom">
								<ul>
									<li>
										<img src={check} alt="" />
										<span>Unlimited temporary emails</span>
									</li>
									<li>
										<img src={check} alt="" />
										<span>
											Download local copy of received emails
										</span>
									</li>
									<li>
										<img src={check} alt="" />
										<span>Keep the same email up to 5 days</span>
									</li>
								</ul>
								<Link to="#" className="__pricing-btn">
									Start your trial
								</Link>
							</div>
						</div>
						<div className="__pricing-item">
							<span className="__pricing-tag">Most Popular</span>
							<div className="__pricing-item-top">
								<h6 className="name">Premium</h6>
								<div className="price">
									<span className="symbol">$</span>
									<h3 className="amount">9</h3>
									<small>/Month</small>
								</div>
							</div>
							<div className="__pricing-item-bottom">
								<ul>
									<li>
										<img src={check} alt="" />
										<span>All public offer features included</span>
									</li>
									<li>
										<img src={check} alt="" />
										<span>Keep the same emails up to 1 year</span>
									</li>
									<li>
										<img src={check} alt="" />
										<span>
											Save received emails content up to 1 month
										</span>
									</li>
									<li>
										<img src={check} alt="" />
										<span>Forward received emails</span>
									</li>
									<li>
										<img src={check} alt="" />
										<span>
											Use multi emails at once (Up to 30 mailbox)
										</span>
									</li>
								</ul>
								<Link to="#" className="__pricing-btn active">
									Start your trial
								</Link>
							</div>
						</div>
						<div className="__pricing-item">
							<div className="__pricing-item-top">
								<h6 className="name">Public</h6>
								<div className="price">
									<span className="symbol">$</span>
									<h3 className="amount">0</h3>
									<small>/Month</small>
								</div>
							</div>
							<div className="__pricing-item-bottom">
								<ul>
									<li>
										<img src={check} alt="" />
										<span>Unlimited temporary emails</span>
									</li>
									<li>
										<img src={check} alt="" />
										<span>
											Download local copy of received emails
										</span>
									</li>
									<li>
										<img src={check} alt="" />
										<span>Keep the same email up to 5 days</span>
									</li>
								</ul>
								<Link to="#" className="__pricing-btn">
									Start your trial
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PricingSection;
