import React from "react";
import { Link } from "react-router-dom";

import google from "../../../assets/images/apps/1.png";
import apple from "../../../assets/images/apps/2.png";
import mobile from "../../../assets/images/apps/mobile-app.png";

const GetApp = () => {
	return (
		<div className="get-app">
			<div className="container">
				<div className="get-app-wrapper">
					<div className="content">
						<h2 className="title">Download our mobile app</h2>
						<div className="text">
							Disposable temporary email protects your real email address
							from spam, advertising mailings, malwares.
						</div>
						<div className="btns-grp">
							<Link to="#">
								<img src={google} alt="" />
							</Link>
							<Link to="#">
								<img src={apple} alt="" />
							</Link>
						</div>
					</div>
					<img src={mobile} className="mobile-app" alt="" />
				</div>
			</div>
		</div>
	);
};

export default GetApp;
