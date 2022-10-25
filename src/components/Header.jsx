import React, { useState } from "react";
import { BsTextRight } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.svg";
import LanguageSelect from "./LanguageSelect";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<>
			<header>
				<div className="container">
					<div className="header-wrapper d-flex justify-content-between align-items-center">
						<Link to="/" className="logo">
							<img src={logo} alt="" />
						</Link>
						<div
							className="header-bar d-lg-none"
							onClick={() => setMenuOpen(!menuOpen)}
						>
							{menuOpen ? <VscChromeClose /> : <BsTextRight />}
						</div>
						<div className={`menu-area ${menuOpen ? "active" : ""}`}>
							<ul className="menu">
								<li>
									<Link to="">How it work</Link>
								</li>
								<li>
									<Link to="">Pricing</Link>
								</li>
								<li>
									<Link to="/blog">Blog</Link>
								</li>
							</ul>
							<div className="login-btns">
								<LanguageSelect />
								<Link to="login" className="header-btn">
									Login / Sign Up
								</Link>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
