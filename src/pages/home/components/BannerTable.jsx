import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../../assets/images/avatar.png";
import check from "../../../assets/images/banner/check.svg";
import dots from "../../../assets/images/banner/dots.svg";
import download from "../../../assets/images/banner/download.svg";
import file from "../../../assets/images/banner/file.svg";
import refresh from "../../../assets/images/banner/refresh.svg";
import search from "../../../assets/images/banner/search.svg";
import star from "../../../assets/images/banner/star.svg";
import trash from "../../../assets/images/banner/trash.svg";

const BannerTable = () => {
	return (
		<>
			<div className="table-responsive">
				<table className="table __banner-table table-hover">
					<thead>
						<tr>
							<th>From</th>
							<th>Subject</th>
							<th className="text-end pe-5">Action</th>
						</tr>
					</thead>
					<tbody>
						{/* First Table Data which contains search & refresh icon */}
						<tr>
							<td>
								<div className="checked__all-wrapper">
									<label className="check-input">
										<input type="checkbox" name="checked__all" />
										<span>
											<img src={check} alt="" />
										</span>
									</label>
									<Link to="#" className="refresh cursor-pointer">
										<img src={refresh} alt="" />
									</Link>
									<Link to="#" className="dots cursor-pointer">
										<img src={dots} alt="" />
									</Link>
								</div>
							</td>
							<td></td>
							<td className="text-end">
								<img src={search} alt="" />
							</td>
						</tr>
						{/* Other Data */}
						{[{}, {}].map((item, i) => (
							<TableRow key={i} />
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};
//Table Row
const TableRow = () => {
	const [index, setIndex] = useState(false);

	return (
		<>
			<tr
				className={`position-relative ${
					index ? "open-table-row border-bottom-0" : ""
				}`}
			>
				<td>
					<span
						className="click-btn"
						onClick={() => setIndex(!index)}
					></span>
					<div className="checked__all-wrapper">
						<label className="check-input">
							<input type="checkbox" name="check__mail" />
							<span>
								<img src={check} alt="" />
							</span>
						</label>
						<div className="refresh cursor-pointer">
							<img src={star} alt="" />
						</div>
						<div className="user">
							<img src={avatar} alt="" />
							<h6 className="m-0">Elyse Andricks</h6>
						</div>
					</div>
				</td>
				<td>
					<div className="mail-data">
						<h6 className="subtitle">Introducing New Dashboard</h6>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Eget ut hac ...
						</p>
					</div>
				</td>
				<td>
					<div className="close-right-data">
						<div className="not-hover-content">
							<span className="circle-shape"></span>
							<span className="mx-2">12 Apr</span>
							<img src={file} alt="" />
						</div>
						<div className="hover-content">
							<Link to="#">
								<img src={download} alt="" />
							</Link>
							<Link to="#">
								<img src={trash} alt="" />
							</Link>
						</div>
					</div>
					<div className="open-right-data">10 Minutes ago</div>
				</td>
			</tr>
			<tr className={`hidden-table-data`}>
				<td colSpan={12}>
					<div className={`table-hidden-content ${index ? "active" : ""}`}>
						<div className="content">
							<div className="wish-content">
								<div className="dear">Subject</div>
								<div>
									Disposable email - is a free email service that
									allows
								</div>
							</div>
							<div className="body-content">
								<div className="dear">Body</div>
								<div>
									Disposable email - is a free email service that
									allows to receive email at a temporary address that
									self-destructed after a certain time elapses. It is
									also known by names like : tempmail, 10minutemail,
									10minmail, throwaway email, fake-mail , fake email
									generator, burner mail or trash-mail. Many forums
								</div>
							</div>
							<div className="d-flex flex-wrap justify-content-end mt-4 mail-btn-container">
								<button className="__outline-btn">Close</button>
								<button className="__not-outline-btn">Download</button>
							</div>
						</div>
					</div>
				</td>
			</tr>
		</>
	);
};

export default BannerTable;
