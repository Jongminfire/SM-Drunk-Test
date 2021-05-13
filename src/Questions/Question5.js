import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Swal from "sweetalert2";

import {Question,QuestionContainer,QuestionNumber,QuestionContent} from "./QuestionCommon";


const InputForm = styled.input`
	background-color: #ffffff;
	border-radius: 10px;
	border: none;
	outline: none;
	height: 9vh;
	width: 40vw;
	font-size: 2rem;
	color: #126e82;
	padding-left: 1rem;
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

const Question5 = (props) => {
	const { score, setScore, setIndex, changeScore, isMobile, count, increaseIndex, setAnswers, setCards, addQnaData } = props;
	const [bottles, setBottles] = useState();
	const drinkType = localStorage.getItem("drinkType");

	const onChangeCount = (e) => {
		let tempBottles = e.target.value;

		if (tempBottles.length >= 3) {
			tempBottles = tempBottles.slice(0, 2);
		}

		setBottles(Number(tempBottles));
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			checkCount();
		}
	};

	const checkCount = () => {
		if (Number.isInteger(bottles) && bottles !== undefined) {
			window.localStorage.setItem("bottleCount", bottles);
			addQnaData("한번 먹을 때 몇 잔을 드셨나요?", bottles);
			increaseIndex();
		} else {
			Swal.fire({
				title: "개수를 숫자로 입력해주세요",
				icon: "error",
				confirmButtonText: "닫기",
				confirmButtonColor: "#DB6867",
			});
		}
	};

	return (
		<div>
			{isMobile ? (
				<QuestionMobile>
					<QuestionNumberMobile>Q{count}.</QuestionNumberMobile>
					<QuestionContentMobile>
						평균적으로 한번 마실 때 몇 잔의 {drinkType}
						{drinkType === "와인" || "칵테일" ? "을" : "를"} 드시나요?
					</QuestionContentMobile>
					<div style={{ margin: "6vh 0" }} />
					<div>
						<InputFormMobile onChange={onChangeCount} maxLength="2" target={bottles} />
						<span style={{ color: "#126e82", fontSize: "2rem", paddingLeft: "1rem" }}>잔</span>
					</div>
					<NextButtonMobile onClick={checkCount}>
						다음 <ArrowForwardIosIcon />
					</NextButtonMobile>
				</QuestionMobile>
			) : (
				<Question>
					<QuestionContainer>
						<QuestionNumber>Q{count}.</QuestionNumber>
						<QuestionContent>
							평균적으로 한번 마실 때 몇 잔의 {drinkType}
							{drinkType === "와인" || drinkType === "칵테일" ? "을" : "를"} 드시나요?
						</QuestionContent>
						<div style={{ margin: "8vh 0" }} />
						<InputForm onChange={onChangeCount} maxLength="2" target={bottles} onKeyPress={handleKeyPress}></InputForm>
						<span style={{ color: "#126e82", fontSize: "2rem", paddingLeft: "1rem" }}>잔</span>
					</QuestionContainer>
					<NextButton onClick={checkCount}>
						다음 <ArrowForwardIosIcon />
					</NextButton>
				</Question>
			)}
		</div>
	);
};

export default Question5;
