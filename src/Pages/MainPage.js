import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import WaveEffect from "../Functions/WaveEffect";
import { useSpring, animated, to } from "@react-spring/web";

import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import styles from "./MainPage.scss";

import Question1 from "../Questions/Question1";
import Background from "../Components/Background";

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

const CardDrawer = (props) => {
	const cards = [];
	return (
		<div class="card-drawer">
			{cards.map((x) => {
				<CardSmall {...x} />;
			})}
		</div>
	);
};

const CardSmall = (prop) => {
	const InnerCard = styled.div`
		margin: auto;
		top: 10vmin;
		background: ${prop.bg};
		box-shadow: 2px -2px 8px 0px #0001;
		height: 10vw;
		width: 50vmin;
		border-radius: 18px;
	`;
};

const CardBig = (prop) => {
	const InnerCard = styled.div`
		margin: auto;
		top: 10vmin;
		background: ${prop.bg};
		box-shadow: 2px -2px 8px 0px #0001;
		height: 80vmin;
		width: 50vmin;
		border-radius: 18px;
	`;
	return <InnerCard>Wow such card content</InnerCard>;
};

const CardPopup = () => {
	return (
		<animated.div class="popup-container">
			<CardBig class="big-card" bg="linear-gradient(153.55deg, #879AF2 9.48%, #D3208B 48.25%, #FDA000 85.78%)"></CardBig>
			<CloseIcon class="close"></CloseIcon>
			<NavigateBeforeIcon class="prevbtn"></NavigateBeforeIcon>
			<NavigateNextIcon class="nextbtn"></NavigateNextIcon>
		</animated.div>
	);
};

const MainPage = (props) => {
	const { onClickFinish, showQuestion, score } = props;

	return (
		<Background>
			<OtherBackground></OtherBackground>
			<Contents>{showQuestion()}</Contents>
			<Carddrawer>sans here</Carddrawer>
			{/* <WaveEffect/> */}
			<CardPopup />
		</Background>
	);
};

export default MainPage;
