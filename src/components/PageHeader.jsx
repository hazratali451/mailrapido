import React, { useEffect } from "react";
import Particles from "./Particles";

const PageHeader = ({ subtitle, title, text, className }) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "particles.min.js";
		script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<section className={`page-header ${className}`}>
			<Particles />
			<div className={`${subtitle ? "container-fluid" : "container"}`}>
				<div className="page-header-content">
					{title && <h2 className="title">{title}</h2>}
					{subtitle && <h4 className="subtitle">{subtitle}</h4>}
					{text && <div className="text">{text}</div>}
				</div>
			</div>
		</section>
	);
};

export default PageHeader;
