import React, { useEffect } from "react";

const Particles = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "particles.min.js";
		script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return <div class="particles-js" id="particles-js"></div>;
};

export default Particles;
