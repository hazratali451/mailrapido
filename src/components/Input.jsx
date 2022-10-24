import React from "react";

const Input = ({ label, textarea, placeholder, ...rest }) => {
	return (
		<>
			<label className="form-label">{label}</label>
			{textarea ? (
				<textarea
					className="form-control"
					placeholder={placeholder}
					{...rest}
				></textarea>
			) : (
				<input
					className="form-control"
					placeholder={placeholder}
					{...rest}
				/>
			)}
		</>
	);
};

export default Input;
