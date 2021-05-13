import React, { useState } from "react";
import styled, { css } from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Question = styled.div`
	width: 70vw;
	height: 50vh;
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

const QuestionMobile = styled.div`
	background-color: #d4f3f6;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50vh;
`;

const InputForm = styled.input`
	background-color: #ffffff;
	border-radius: 10px;
	border: none;
	outline: none;
	height: 8vh;
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

const Question4 = (props) => {
	const { score, setScore, setIndex, changeScore, isMobile, count, increaseIndex } = props;
	const [bottles, setBottles] = useState();
	const drinkType = localStorage.getItem("drinkType");

	const onChangeCount = (e) => {
		let tempBottles = e.target.value;

		if (tempBottles.length >= 3) {
			tempBottles = tempBottles.slice(0, 2);
		}

		setBottles(Number(tempBottles));
	};

	const checkCount = () => {
		if (Number.isInteger(bottles) || bottles !== undefined) {
			window.localStorage.setItem("bottleCount", bottles);
			increaseIndex();
		} else {
			alert("개수를 입력해주세요");
		}
	};

	return (
		<div>
			{isMobile ? (
				<Question>
					<QuestionContainer>
						<QuestionNumber>Q{count}.</QuestionNumber>
						<QuestionContent>
							평균적으로 일주일동안 몇 병의 {drinkType}
							{drinkType === "와인" || "칵테일" ? "을" : "를"} 드시나요?
						</QuestionContent>
						<div style={{ margin: "8vh 0" }} />
						<InputForm onChange={onChangeCount} maxLength="2" target={bottles}></InputForm>
						<span style={{ color: "#126e82", fontSize: "2.5rem", paddingLeft: "1rem" }}>병</span>
					</QuestionContainer>
					<NextButton onClick={checkCount}>
						다음 <ArrowForwardIosIcon />
					</NextButton>
				</Question>
			) : (
				<Question>
					<QuestionContainer>
						<QuestionNumber>Q{count}.</QuestionNumber>
						<QuestionContent>
							평균적으로 일주일동안 몇 병의 {drinkType}
							{drinkType === "와인" || drinkType === "칵테일" ? "을" : "를"} 드시나요?
						</QuestionContent>
						<div style={{ margin: "8vh 0" }} />
						<InputForm onChange={onChangeCount} maxLength="2" target={bottles}></InputForm>
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
