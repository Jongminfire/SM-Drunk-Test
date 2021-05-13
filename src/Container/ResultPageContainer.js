import React, { useCallback } from "react";
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
	return (
		<div>
			<Desktop>
				<ResultPage />
			</Desktop>
			<Mobile>
				<ResultPageMobile />
			</Mobile>
		</div>
	);
};

export default Result;
