import React from "react";

import page_header from "../assets/images/banner/banner-bg.png";
const PageHeader = ({ subtitle, title, text, className }) => {
	return (
		<section
			className={`page-header ${className}`}
			style={{
				background: `url(${page_header}) no-repeat center center / cover`,
			}}
		>
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
