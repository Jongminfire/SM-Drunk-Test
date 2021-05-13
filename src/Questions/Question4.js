import React, { useState } from "react";
import styled, { css } from "styled-components";

import { Question, QuestionContainer, QuestionNumber, QuestionContent } from "./QuestionCommon";

const ButtonForm = styled.button`
	background-color: #ffffff;
	border-radius: 0.5rem;
	border: none;
	outline: none;
	height: 6vh;
	min-width: 10vw;
	font-size: 1.2rem;
	cursor: pointer;
	color: #126e82;
	margin: 0.5vh 0 0.5vh 1.5vw;

	transition: all ease-in-out 0.1s;
	&:hover {
		transform: scale(1.1);
	}

	&:active {
		transform: scale(0.9, 0.9);
	}
`;

const NextButton = styled.button`
	border-radius: 5px;
	background-color: #d8e3e7;
	padding: 1vh 2vw;
	border: none;
	outline: none;
	cursor: pointer;
	position: absolute;
	right: 2%;
	bottom: 5%;
	color: #126e82;
	font-size: 1.5rem;

	transition: all ease-in-out 0.1s;
	&:hover {
		transform: scale(1.1);
	}

	&:active {
		transform: scale(0.9, 0.9);
	}
`;

const QuestionMobile = styled.div`
	background-color: #d4f3f6;
	display: flex;
	flex-direction: column;
	position: absolute;
	right: 5vw;
	top: 5vh;
	justify-content: center;
	align-items: center;
	width: 90vw;
	height: 75vh;
	border-radius: 2rem;
`;

const QuestionContentMobile = styled.div`
	color: #126e82;
	font-size: 1.5rem;
	padding: 7vh 7vw 0;
`;

const QuestionNumberMobile = styled.div`
	color: #126e82;
	font-size: 3rem;
	position: absolute;
	top: 3vh;
	left: 5vw;
`;

const InputFormMobile = styled.input`
	background-color: #ffffff;
	border-radius: 10px;
	border: none;
	outline: none;
	height: 9vh;
	width: 50vw;
	font-size: 1.5rem;
	color: #126e82;
	padding-left: 1rem;
`;

const NextButtonMobile = styled.button`
	border-radius: 5px;
	background-color: #d8e3e7;
	padding: 1vh 2vw;
	border: none;
	outline: none;
	cursor: pointer;
	position: absolute;
	right: 8vw;
	bottom: 5vh;
	color: #126e82;
	font-size: 1.5rem;
`;

const ButtonFormMobile = styled.button`
	background-color: #ffffff;
	border-radius: 0.5rem;
	border: none;
	outline: none;
	height: 5vh;
	min-width: 70vw;
	font-size: 1rem;
	cursor: pointer;
	color: #126e82;
	margin: 1vh 0 1vh;

	&:hover {
		transform: scale(1.1, 1.1);
		transition: all ease-in-out 0.2s;
	}

	&:active {
		transform: scale(0.85, 0.85);
	}
`;

const Question4 = (props) => {
	const { score, setScore, setIndex, changeScore, isMobile, count, increaseIndex, setAnswers, setCards, addQnaData } = props;
	const [type, setType] = useState("");

	const onClickType = (type) => {
		setType(type);
		localStorage.setItem("drinkType", type);
		addQnaData("주로 어떤 술을 마시나요?", type);
		increaseIndex();
	};

	return (
		<div>
			{isMobile ? (
				<QuestionMobile>
					<QuestionNumberMobile>Q{count}.</QuestionNumberMobile>
					<QuestionContentMobile>주로 어떤 술을 마시나요?</QuestionContentMobile>
					<div style={{ margin: "0.5vh 0 2vh" }} />
					<ButtonFormMobile onClick={() => onClickType("소주")}>소주</ButtonFormMobile>
					<ButtonFormMobile onClick={() => onClickType("맥주")}>맥주</ButtonFormMobile>
					<ButtonFormMobile onClick={() => onClickType("양주")}>양주</ButtonFormMobile>
					<ButtonFormMobile onClick={() => onClickType("막걸리")}>막걸리</ButtonFormMobile>
					<ButtonFormMobile onClick={() => onClickType("와인")}>와인</ButtonFormMobile>
				</QuestionMobile>
			) : (
				<Question>
					<QuestionContainer>
						<QuestionNumber>Q{count}.</QuestionNumber>
						<QuestionContent>주로 어떤 술을 마시나요?</QuestionContent>
						<div style={{ margin: "12vh 0" }}>
							<ButtonForm onClick={() => onClickType("소주")}>소주</ButtonForm>
							<ButtonForm onClick={() => onClickType("맥주")}>맥주</ButtonForm>
							<ButtonForm onClick={() => onClickType("양주")}>양주</ButtonForm>
							<ButtonForm onClick={() => onClickType("막걸리")}>막걸리</ButtonForm>
							<ButtonForm onClick={() => onClickType("와인")}>와인</ButtonForm>
						</div>
					</QuestionContainer>
				</Question>
			)}
		</div>
	);
};

export default Question4;
