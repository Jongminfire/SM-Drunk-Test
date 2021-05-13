import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MainPage from "../Pages/MainPage";
import MainPageMobile from "../Mobile/MainPageMobile";

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile ? children : null;
};

const Main = () => {
	const history = useHistory();
	const onClickFinish = useCallback(() => {
		history.push("/result");
	}, []);
	return (
		<div>
			<Desktop>
				<MainPage onClickFinish={onClickFinish} />
			</Desktop>
			<Mobile>
				<MainPageMobile onClickFinish={onClickFinish} />
			</Mobile>
		</div>
	);
};

export default Main;
