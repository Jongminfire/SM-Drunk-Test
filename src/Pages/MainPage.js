import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import WaveEffect from "../Functions/WaveEffect";
import { useSpring, animated, to } from "@react-spring/web";
import { v4 as uuidv4 } from "uuid";
import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import styles from "./MainPage.scss";

import Question1 from "../Questions/Question1";
import Background from "../Components/Background";
import { CardPopup, CardDrawer } from "../Components/Card";

const StyledButton = styled.button`
	margin: 1%;
	padding: 1%;
	width: 7%;
	border-radius: 20px;
	border-color: white;
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
const testimg =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAC/ElEQVR42u3UQREAMAjAsGFkBnGOCdABl0joo/Gz+gEsEIYFGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWIBhGRZgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhAYZlWIBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFGJZhAYYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBZgWDIAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBRiWYQGGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWYFiGBRgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYwGUDafne43vNlkkAAAAASUVORK5CYII=";

const MainPage = (props) => {
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

	const OtherBackground = () => {
		const clk = () => {
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
		return <div className="othbg" stag={stag} onClick={clk} />;
	};

	return (
		<Background>
			<div className="othbg" stag={stag} />
			<div className="othbg2" stag={(stag + 1) % 4} />
			<div className="othbg3" stag={(stag + 2) % 4} />
			<div className="othbg4" stag={(stag + 3) % 4} />
			<SwitchTransition>
				<CSSTransition key={count} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)} classNames="fade">
					{showQuestion()}
				</CSSTransition>
			</SwitchTransition>
			<CardDrawer
				clckevent={(card) => {
					setPopped(true);
					setSelectedCard(card);
				}}
				cards={cards}
			></CardDrawer>
			<CardPopup popped={popped} setPopped={setPopped} card={selectedCard} />
		</Background>
	);
};

export default MainPage;
