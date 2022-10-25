import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import img from "./img/login.svg";

import PageHeader from "../../components/PageHeader";
import facebook from "./img/facebook.svg";
import google from "./img/google.svg";
import twitter from "./img/twitter.svg";

const Login = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<PageHeader title="Login" />
			<section className="auth-section pt-120 pb-120">
				<div className="shape-1"></div>
				<div className="shape-2"></div>
				<div className="container position-relative">
					<div className="row align-items-center gy-5">
						<div className="col-lg-6">
							<div className="__login-wrapper" data-aos="fade-up">
								<h2 className="title">Login to your account</h2>
								<form onSubmit={handleSubmit}>
									<div className="row g-4">
										<div className="col-sm-12">
											<Input label="Email Address" />
										</div>
										<div className="col-sm-12">
											<Input label="password" type="password" />
										</div>
										<div className="col-12">
											<div className="d-flex justify-content-between">
												<div className="form-check">
													<input
														type="checkbox"
														id="aggree"
														className="form-check-input"
													/>
													<label
														htmlFor="aggree"
														className="form-check-label"
													>
														Remember me
													</label>
												</div>
												<Link to="#" className="text-primary">
													Forgot your password?
												</Link>
											</div>
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
												Not a Member?{" "}
												<Link
													className="text-primary"
													to="/sign-up"
												>
													Sign up
												</Link>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-6 text-center text-lg-end">
							<img
								className="auth-img"
								data-aos="fade-left"
								src={img}
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
