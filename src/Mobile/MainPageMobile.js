import React from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const MainPageMobile = (props) => {
	const { onClickFinish, showQuestion, score } = props;
	return (
		<div>
			{showQuestion()}
			<br />
			score: {score}
			<button onClick={onClickFinish}>테스트 끝내기</button>
		</div>
	);
};

export default MainPageMobile;
