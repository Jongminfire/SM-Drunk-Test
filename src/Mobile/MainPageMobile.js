import React from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const MainPageMobile = (props) => {
	const { showQuestion, score } = props;
	return (
		<div>
			{showQuestion()}
			<br />
		</div>
	);
};

export default MainPageMobile;
