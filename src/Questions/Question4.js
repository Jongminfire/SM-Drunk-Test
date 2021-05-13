import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Swal from "sweetalert2";

const Question = styled.div`
	position: absolute;
	display: flex;
	background-color: #d4f2f6;
	min-width: 75vw;
	min-height: 60vh;
	border-radius: 15px;
	left: 5vw;
	top: 15vh;
`;

const QuestionContainer = styled.div`
	padding: 2vh 0 0 2vw;
`;

const QuestionNumber = styled.div`
	color: #126e82;
	font-size: 4rem;
`;

const QuestionContent = styled.div`
	color: #126e82;
	font-size: 2rem;
	font-weight: bold;
	padding-top: 4vh;
`;

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

	&:hover {
		transform: scale(1.1, 1.1);
		transition: all ease-in-out 0.2s;
	}

	&:active {
		transform: scale(0.85, 0.85);
		transition: all ease-in-out 0.1s;
	}
`;

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

const Question4 = (props) => {
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
			addQnaData("일주일동안 몇 병을 드셨나요?", bottles);
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
						평균적으로 일주일동안 몇 병의 {drinkType}
						{drinkType === "와인" || "칵테일" ? "을" : "를"} 드시나요?
					</QuestionContentMobile>
					<div style={{ margin: "6vh 0" }} />
					<div>
						<InputFormMobile onChange={onChangeCount} maxLength="2" target={bottles} />
						<span style={{ color: "#126e82", fontSize: "2rem", paddingLeft: "1rem" }}>병</span>
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
							평균적으로 일주일동안 몇 병의 {drinkType}
							{drinkType === "와인" || drinkType === "칵테일" ? "을" : "를"} 드시나요?
						</QuestionContent>
						<div style={{ margin: "8vh 0" }} />
						<InputForm onChange={onChangeCount} maxLength="2" target={bottles} onKeyPress={handleKeyPress}></InputForm>
						<span style={{ color: "#126e82", fontSize: "2rem", paddingLeft: "1rem" }}>병</span>
					</QuestionContainer>
					<NextButton onClick={checkCount}>
						다음 <ArrowForwardIosIcon />
					</NextButton>
				</Question>
			)}
		</div>
	);
};

export default Question4;
