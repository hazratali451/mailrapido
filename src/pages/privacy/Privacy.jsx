import React from "react";
import PageHeader from "../../components/PageHeader";
import privacy from "./privacy-data";
const Privacy = () => {
	return (
		<>
			<PageHeader title="Privacy" />
			<section className="privacy-section pt-120 pb-120">
				<div className="container">
					{privacy &&
						privacy.map(({ title, info }, i) => (
							<div className="item">
								<h4 className="title">
									{" "}
									{i < 9 ? `0${i + 1}` : i + 1} {title}
								</h4>
								{info && (
									<ol>
										{info.map(({ txt }, j) => (
											<li>{txt}</li>
										))}
									</ol>
								)}
							</div>
						))}
				</div>
			</section>
		</>
	);
};

export default Privacy;
