import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import WaveEffect from "../Functions/WaveEffect";
import { useSpring, animated, to } from '@react-spring/web'

import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import styles from "./MainPage.scss";

import Question1 from "../Questions/Question1";
import Background from "../Components/Background"
import { CardPopup, CardDrawer } from "../Components/Card"
import { MobileCardPopup, MobileCardDrawer } from "../Components/mobileCard"

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


const MainPage = (props) => {
	const { onClickFinish, showQuestion, score } = props;

	return (
		<Background>
			<OtherBackground></OtherBackground>
			<Contents>
				{showQuestion()}
				<br />
				score: {score}
				<br />
				<button onClick={onClickFinish}>테스트 끝내기</button>
			</Contents>
{/* 			
			<CardDrawer cards={[{bg:"linear-gradient(153.55deg, #879AF2 9.48%, #D3208B 48.25%, #FDA000 85.78%)"}]}>sans here</CardDrawer>
		
			<CardPopup visible={false}/>
			 */}
			<MobileCardDrawer cards={[{bg:"linear-gradient(153.55deg, #879AF2 9.48%, #D3208B 48.25%, #FDA000 85.78%)"}]}>sans here</MobileCardDrawer>
			{/* <WaveEffect/> */}
			<MobileCardPopup visible={false}/>
		</Background>
	);
};

export default MainPage;
