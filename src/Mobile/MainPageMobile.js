import React from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./QuestionsMobile.css";

const MainPageMobile = (props) => {
	const { showQuestion, score, count } = props;
	return (
		<SwitchTransition>
			<CSSTransition key={count} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)} classNames="fade">
				{showQuestion()}
			</CSSTransition>
		</SwitchTransition>
	);
};

export default MainPageMobile;
