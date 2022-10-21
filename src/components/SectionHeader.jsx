import React from "react";

const SectionHeader = ({ subtitle, title, text, leftAlign }) => {
	return (
		<div
			className={`section-header ${
				!leftAlign ? "text-center mx-auto center-align" : ""
			}`}
		>
			{subtitle && <h5 className="subtitle text--primary">{subtitle}</h5>}
			{title && <h2 className="title">{title}</h2>}
			{text && <p>{text}</p>}{" "}
		</div>
	);
};

export default SectionHeader;
