import React, { useCallback } from "react";
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
	const qnaData = props.location.state.qnaData;
	const score = props.location.state.score;

	return (
		<div>
			<Desktop>
				<ResultPage qnaData={qnaData} score={score} />
			</Desktop>
			<Mobile>
				<ResultPageMobile qnaData={qnaData} score={score} />
			</Mobile>
		</div>
	);
};

export default Result;
