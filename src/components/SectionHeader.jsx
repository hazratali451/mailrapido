import React from "react";

const SectionHeader = ({ subtitle, title, text, leftAlign, className }) => {
	return (
		<div
			className={`section-header ${
				!leftAlign ? "text-center mx-auto center-align" : ""
			} ${className ? className : ""}`}
			data-aos="fade-up"
		>
			{subtitle && <h5 className="subtitle text--primary">{subtitle}</h5>}
			{title && <h2 className="title">{title}</h2>}
			{text && <p>{text}</p>}{" "}
		</div>
	);
};

export default SectionHeader;
