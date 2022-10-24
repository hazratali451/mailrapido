import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import img from "./img/login.svg";

import PageHeader from "../../components/PageHeader";
import facebook from "./img/facebook.svg";
import google from "./img/google.svg";
import twitter from "./img/twitter.svg";

const SignUp = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<PageHeader title="Sign Up" />
			<section className="auth-section pt-120 pb-120">
				<div className="shape-1"></div>
				<div className="shape-2"></div>
				<div className="container position-relative">
					<div className="row align-items-center gy-5">
						<div className="col-lg-6">
							<div className="__login-wrapper">
								<h2 className="title">Create a new account</h2>
								<form onSubmit={handleSubmit}>
									<div className="row g-4">
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
											<Input
												label="Email Address"
												placeholder="you@example.com"
											/>
										</div>
										<div className="col-sm-12">
											<Input
												label="Create a password"
												placeholder="*********"
												type="password"
											/>
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
													Agree with Terms & Privacy Policy
												</label>
											</div>
										</div>
										<div className="col-12">
											<div className="col-sm-12">
												<Input
													label="Confirm password"
													placeholder="*********"
													type="password"
												/>
											</div>
											<div className="d-flex justify-content-between mt-3">
												<div className="form-check">
													<input
														type="checkbox"
														id="remember"
														className="form-check-input"
													/>
													<label
														htmlFor="remember"
														className="form-check-label"
													>
														Remember me
													</label>
												</div>
												<Link to="#" className="text-primary">
													Forgot your password?
												</Link>
											</div>
										</div>
										<div className="col-12">
											<div className="or-options">
												<span>Or continue with</span>
											</div>
											<div className="sign-in-with-subtitle">
												Sign in with
											</div>
											<div className="sign-in-with">
												<Link>
													<img src={google} alt="" />
												</Link>
												<Link>
													<img src={facebook} alt="" />
												</Link>
												<Link>
													<img src={twitter} alt="" />
												</Link>
											</div>
											<button
												className="btn--base mt-4 d-block w-100 h-56px"
												type="submit"
											>
												<span>Sign in</span>
											</button>
											<div className="mt-32">
												Are you a Member ?{" "}
												<Link className="text-primary" to="/login">
													Login
												</Link>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-6 text-center text-lg-end">
							<img className="auth-img" src={img} alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SignUp;
