import React, { useState } from "react";
import styled, { css } from "styled-components";

const Question = styled.div`
	width: 70vw;
	height: 60vmin;
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

const ButtonForm = styled.button`
	background-color: #ffffff;
	border-radius: 0.2rem;
	border: none;
	outline: none;
	height: 4vh;
	width: 10vw;
	font-size: 1.2rem;
	cursor: pointer;
	color: #126e82;
	margin: 0.5vh 0 0.5vh 1vw;
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

const Question2 = (props) => {
	const { score, setScore, setIndex, changeScore, isMobile, count, increaseIndex } = props;
	const [type, setType] = useState("");

	const onClickType = (type) => {
		setType(type);
		localStorage.setItem("drinkType", type);
		increaseIndex();
	};

	return (
		<div>
			{isMobile ? (
				<Question>
					<QuestionContainer>
						<QuestionNumber>Q{count}.</QuestionNumber>
						<QuestionContent>주로 어떤 술을 마시나요?</QuestionContent>
						<div style={{ margin: "8vh 0", display: "flex", flexDirection: "column" }}>
							<ButtonForm onClick={() => onClickType("소주")}>소주</ButtonForm>
							<ButtonForm onClick={() => onClickType("맥주")}>맥주</ButtonForm>
							<ButtonForm onClick={() => onClickType("양주")}>양주</ButtonForm>
							<ButtonForm onClick={() => onClickType("막걸리")}>막걸리</ButtonForm>
							<ButtonForm onClick={() => onClickType("와인")}>와인</ButtonForm>
							<ButtonForm onClick={() => onClickType("칵테일")}>칵테일</ButtonForm>
						</div>
					</QuestionContainer>
				</Question>
			) : (
				<Question>
					<QuestionContainer>
						<QuestionNumber>Q{count}.</QuestionNumber>
						<QuestionContent>주로 어떤 술을 마시나요?</QuestionContent>
						<div style={{ margin: "8vh 0", display: "flex", flexDirection: "column" }}>
							<ButtonForm onClick={() => onClickType("소주")}>소주</ButtonForm>
							<ButtonForm onClick={() => onClickType("맥주")}>맥주</ButtonForm>
							<ButtonForm onClick={() => onClickType("양주")}>양주</ButtonForm>
							<ButtonForm onClick={() => onClickType("막걸리")}>막걸리</ButtonForm>
							<ButtonForm onClick={() => onClickType("와인")}>와인</ButtonForm>
							<ButtonForm onClick={() => onClickType("칵테일")}>칵테일</ButtonForm>
						</div>
					</QuestionContainer>
				</Question>
			)}
		</div>
	);
};

export default Question2;
