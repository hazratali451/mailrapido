import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Input from "../../../components/Input";
import img from "./contact.svg";
const ContactSection = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const [phone, setPhone] = useState("");
	return (
		<section className="contact-section pt-120 pb-120">
			<div className="shape-1"></div>
			<div className="shape-2"></div>
			<div className="container position-relative">
				<div className="row align-items-center gy-5">
					<div className="col-lg-6">
						<div className="__contact-wrapper" data-aos="fade-up">
							<h2 className="title">Get in touch</h2>
							<div className="text">
								Our friendly team would love to hear from you.
							</div>
							<form onSubmit={handleSubmit}>
								<div className="row g-3">
									<div className="col-sm-6">
										<Input
											placeholder="First Name"
											label="First Name"
										/>
									</div>
									<div className="col-sm-6">
										<Input
											placeholder="Last Name"
											label="Last Name"
										/>
									</div>
									<div className="col-sm-12">
										<label className="form-label">Phone number</label>
										<PhoneInput
											country={"us"}
											value={phone}
											enableSearch
											onChange={(phone) => setPhone(phone)}
										/>
									</div>
									<div className="col-sm-12">
										<Input label="Message" textarea />
									</div>
									<div className="col-12">
										<div className="form-check mt-2">
											<input
												type="checkbox"
												id="aggree"
												className="form-check-input"
											/>
											<label
												htmlFor="aggree"
												className="form-check-label"
											>
												You agree to our friendly privacy policy.
											</label>
										</div>
										<button
											className="btn--base mt-32 d-block w-100"
											type="submit"
										>
											<span>Send Message</span>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6 text-center text-lg-end">
						<img
							className="mw-100"
							data-aos="fade-right"
							src={img}
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
