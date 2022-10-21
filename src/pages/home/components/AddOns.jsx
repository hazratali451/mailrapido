import React from "react";
import temp_email from "../../../assets/images/temp-email-img.png";
const AddOns = () => {
	return (
		<>
			<section className="pb-120 overflow-hidden">
				<div className="container">
					<div className="row align-items-center gy-4">
						<div className="col-lg-5 text-center text-lg-start">
							<h2 className="temp-email-title mx-auto ms-lg-0">
								Temporary Email Generator by Temporary Email Generator
							</h2>
						</div>
						<div className="col-lg-7">
							<img src={temp_email} className="temp-email-img" alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AddOns;
