import React from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import WaveEffect from "../Functions/WaveEffect";

import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "./MainPage.scss";

const Background = styled.div`
	position: relative;
	background-color: #51c4d3;
	width: 100%;
	height: 100vh;
	overflow: hidden;
`;

const Contents = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #d4f2f6;
	min-width: 65vw;
	min-height: 50vh;
	border-radius: 15px;
	left: 5vw;
	top: 10vh;
`;

const Carddrawer = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #171f38;
	width: 18vw;
	height: 100vh;
	border-radius: 40px;
	right: -40px;
	top: 0;
	box-shadow: -6px 6px 4px 0px #00000040;
`;

const OtherBackground = () => {
	const [stag, setStag] = React.useState(0);
	const clk = () => {
		console.log(stag);
		if (stag == 0) {
			setStag(1);
		} else if (stag == 1) {
			setStag(2);
			setTimeout(() => {
				setStag(3);
				setTimeout(() => {
					setStag(0);
				}, 0.5 * 1000);
			}, 0.5 * 1000);
		} else if (stag == 2) {
			return;
		}
	};
	return <div class="othbg" stag={stag} onClick={clk}></div>;
};

const CardSmall = () => {};
const CardBig = (prop) => {
	const InnerCard = styled.div`
		background: ${prop.bg};
		box-shadow: 2px -2px 8px 0px #0001;
		height: 80vh;
		width: 30vw;
	`;
	return <InnerCard>Wow such card content</InnerCard>;
};

const CardPopup = () => {
	return (
		<div class="popup-container">
			<CardBig class="card"></CardBig>
			<CloseIcon class="close"></CloseIcon>
			<NavigateBeforeIcon class="prevbtn"></NavigateBeforeIcon>
			<NavigateNextIcon class="nextbtn"></NavigateNextIcon>
		</div>
	);
};

const MainPage = (props) => {
	const { onClickFinish } = props;
	return (
		<Background>
			<OtherBackground></OtherBackground>
			<Contents>
				PC 설문페이지 입니다.
				<button onClick={onClickFinish}>테스트 끝내기</button>
				<button onClick={onClickFinish}>테스트 끝내기</button>
			</Contents>
			<Carddrawer>sans here</Carddrawer>
			{/* <WaveEffect/> */}
		</Background>
	);
};

export default MainPage;
