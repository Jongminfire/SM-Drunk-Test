import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./QuestionsMobile.css";
import WaveEffect from "../Functions/WaveEffect";
import { useSpring, animated, to } from "@react-spring/web";
import { v4 as uuidv4 } from "uuid";
import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import styles from "../Pages/MainPage.scss";

import Question1 from "../Questions/Question1";

import Background from "../Components/Background";
import { CardPopup, CardDrawer } from "../Components/Card";
import { MobileCardPopup, MobileCardDrawer } from "../Components/mobileCard";

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
	return <div className="othbg" stag={stag} onClick={clk}></div>;
};

const MainPageMobile = (props) => {
	const { showQuestion, score, setCards, setAnswers, count, stag, cards } = props;
	const [popped, setPopped] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);

	const [testcards2, setTestcards2] = useState([]);

	function cadni() {
		if (cards.length > 0) {
			const joined = testcards2.concat(cards[cards.length - 1]);
			setTestcards2(joined);
			setCards(cards.slice(0, -1));
		}
	}
	function cadji() {
		if (testcards2.length > 0) {
			const joined = cards.concat(testcards2[testcards2.length - 1]);
			setCards(joined);
			setTestcards2(testcards2.slice(0, -1));
		}
	}
	return (
		<div>
			<Background>
				<SwitchTransition>
					<CSSTransition key={count} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)} classNames="fade">
						{showQuestion()}
					</CSSTransition>
				</SwitchTransition>
				<MobileCardDrawer
					clckevent={(card) => {
						setPopped(true);
						setSelectedCard(card);
					}}
					cards={cards}
				>
					<MobileCardPopup popped={popped} setPopped={setPopped} card={selectedCard} />
				</MobileCardDrawer>
			</Background>
		</div>
	);
};

export default MainPageMobile;
