import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import WelcomePage from "../Pages/WelcomePage";
import WelcomePageMobile from "../Mobile/WelcomePageMobile";

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile ? children : null;
};

const Welcome = () => {
	const history = useHistory();
	const onClickStart = useCallback(() => {
		history.push("/main");
	}, []);

	// 로컬스토리지 (개인정보) 초기화
	window.localStorage.clear();

	return (
		<div>
			<Desktop>
				<WelcomePage onClickStart={onClickStart} />
			</Desktop>
			<Mobile>
				<WelcomePageMobile onClickStart={onClickStart} />
			</Mobile>
		</div>
	);
};

export default Welcome;
