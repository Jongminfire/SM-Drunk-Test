import React, { useCallback } from "react";
import { Router, useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { useMediaQuery } from "react-responsive";
import ResultPage from "../Pages/ResultPage";
import ResultPageMobile from "../Mobile/ResultPageMobile";

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile ? children : null;
};

const Result = (props) => {
	const history = useHistory();
	const qnaData = props.location.state.qnaData;
	const score = props.location.state.score;

	const onClickRestart = useCallback(() => {
		history.push("/");
	}, []);

	return (
		<div>
			<Desktop>
				<ResultPage qnaData={qnaData} score={score} onClickRestart={onClickRestart} />
			</Desktop>
			<Mobile>
				<ResultPageMobile qnaData={qnaData} score={score} onClickRestart={onClickRestart} />
			</Mobile>
		</div>
	);
};

export default Result;
