import React, { useRef, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { Link } from "react-router-dom";
import mail_shape from "../../../assets/images/banner/banner-top-shape.svg";
import mail_icon from "../../../assets/images/banner/mail-icon.svg";
import Particles from "../../../components/Particles";
import BannerTable from "./BannerTable";
import pen from "./pen.svg";
import refresh_img from "./refresh.svg";
import trash from "./trash.svg";
const Banner = () => {
	const ref = useRef();
	const [copy, setCopy] = useState(false);

	const handleCopy = () => {
		setCopy(true);
		navigator.clipboard.writeText(ref.current.value);
		setTimeout(() => {
			setCopy(false);
		}, 1500);
	};
	return (
		<>
			<div className="banner-section">
				<Particles />
				<div className="container">
					<div className="banner-content" data-aos="fade-up">
						<h2 className="title"> temporary email address is ready</h2>
						<p className="text">
							This mail can be changed to another. Also available search
							and random email generator
						</p>
					</div>
				</div>
			</div>
			<section>
				<div className="container banner-container">
					<div className="banner-email-wrapper" data-aos="fade-up">
						<img src={mail_shape} className="mail-shape" alt="" />
						<div className="banner-email-top">
							<h4 className="subtitle">Your Temporary Email Address</h4>
							<div className="copy-txt">
								<input
									ref={ref}
									type="text"
									value="ejkdilx056@profunivers.com"
									readOnly
								/>
								<button
									type="button"
									className="copy-click"
									onClick={handleCopy}
								>
									{!copy ? (
										<>
											Copy <MdContentCopy />
										</>
									) : (
										"Copied!"
									)}
								</button>
							</div>
							<div className="banner-btn-wrapper">
								<Link className="outline-btn" to="#">
									<img src={trash} alt="" /> Delete
								</Link>
								<Link className="outline-btn" to="#">
									<img src={refresh_img} alt="" /> Refresh
								</Link>
								<Link className="outline-btn" to="#">
									<img src={pen} alt="" /> Create
								</Link>
							</div>
							<div className="count-message d-flex align-items-center justify-content-center">
								<img src={mail_icon} alt="" />
								<span>You have 0 new messages</span>
							</div>
						</div>
						<div className="table--wrapper">
							<BannerTable />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
