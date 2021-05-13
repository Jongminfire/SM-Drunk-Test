import React from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import WaveEffect from "../Functions/WaveEffect"

const MainPage = (props) => {
	const { onClickFinish } = props;
	return (
		<div>
			PC 설문페이지 입니다.
			<button onClick={onClickFinish}>테스트 끝내기</button>
			<WaveEffect/>
		</div>
	);
};

export default MainPage;
