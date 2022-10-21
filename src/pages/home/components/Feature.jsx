import React from "react";
import img1 from "../../../assets/images/feature/1.svg";
import img2 from "../../../assets/images/feature/2.svg";
import img3 from "../../../assets/images/feature/3.svg";
import feature from "../../../assets/images/feature/feature.png";
import SectionHeader from "../../../components/SectionHeader";

const data = [
	{
		img: img1,
		title: "Simple & Free",
		txt: "Create temp emails fast simple steps & always free",
	},
	{
		img: img2,
		title: "100% safe",
		txt: "Protect your privacy by not allowing spam in your personal inbox",
	},
	{
		img: img3,
		title: "Worldwide",
		txt: "Used by professionals all around the world , try it now",
	},
];

const FeatureItem = ({ img, title, txt }) => {
	return (
		<>
			<div className="__feature">
				<div className="__feature-img">
					<img src={img} alt="" />
				</div>
				<div className="__feature-cont">
					<h5 className="title">{title}</h5>
					<div>{txt}</div>
				</div>
			</div>
		</>
	);
};

const Feature = () => {
	return (
		<section className="feature-section pb-120 position-relative">
			<div className="feature-shape"></div>
			<div className="container">
				<SectionHeader
					subtitle="Why choose us"
					title="Awesome Features"
					text="Disposable temporary email protects your real email address from spam, advertising mailings, malwares."
				/>
				<div className="row align-items-center justify-content-center gy-5">
					<div className="col-lg-6 col-md-10">
						{data &&
							data.map((item, i) => <FeatureItem key={i} {...item} />)}
					</div>
					<div className="col-lg-6 text-center text-lg-end">
						<img src={feature} className="feature-img" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature;
