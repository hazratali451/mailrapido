import React, { useState } from "react";

import bn from "../assets/images/lang/bn.png";
import en from "../assets/images/lang/en.png";
import sn from "../assets/images/lang/sn.png";

const Option = () => {
	return (
		<>
			<li></li>
		</>
	);
};
const data = [
	{
		img: en,
		name: "English",
	},
	{
		img: bn,
		name: "Bangla",
	},
	{
		img: sn,
		name: "Malay",
	},
];

const LanguageSelect = () => {
	const [index, setIndex] = useState(0);

	const { img, name } = data[index];

	return (
		<div className="select-container">
			<button className="selected-item">
				<img src={img} alt="" />
				<div>{name}</div>
			</button>
			<ul className="select-data">
				{data &&
					data.map(({ img, name }, i) => (
						<li key={i} onClick={() => setIndex(i)}>
							<img src={img} alt="" />
							<div>{name}</div>
						</li>
					))}
			</ul>
		</div>
	);
};

export default LanguageSelect;
