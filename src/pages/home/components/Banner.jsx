import React, { useRef, useState } from "react";
import { FiRefreshCw, FiTrash2 } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import { TfiPencil } from "react-icons/tfi";
import { Link } from "react-router-dom";
import banner_bg from "../../../assets/images/banner/banner-bg.png";
import mail_shape from "../../../assets/images/banner/banner-top-shape.svg";
import mail_icon from "../../../assets/images/banner/mail-icon.svg";
import BannerTable from "./BannerTable";

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
			<div
				className="banner-section"
				style={{
					background: `url(${banner_bg}) no-repeat fixed center center / cover`,
				}}
			>
				<div className="container">
					<div className="banner-content">
						<h2 className="title"> temporary email address is ready</h2>
						<p className="text">
							This mail can be changed to another. Also available search
							and random email generator
						</p>
					</div>
				</div>
			</div>
			<div className="container" style={{ marginTop: `-410px` }}>
				<div className="banner-email-wrapper">
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
								<FiTrash2 /> Delete
							</Link>
							<Link className="outline-btn" to="#">
								<FiRefreshCw /> FiRefreshCw
							</Link>
							<Link className="outline-btn" to="#">
								<TfiPencil /> FiRefreshCw
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
		</>
	);
};

export default Banner;
