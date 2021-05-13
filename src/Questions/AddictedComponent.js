import React, { useState } from "react";
import styled, { css } from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

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
`;

const AddictedComponent = (props) => {
	const { score, setScore, setIndex, changeScore, isMobile, count, increaseIndex, setAnswers, setCards, data, addQnaData } = props;
	const question = data.question;
	const answer = data.answer;
	const [name, setName] = useState("");

	const onChangeName = (e) => {
		setName(e.target.value);
		console.log(name);
	};

	const selectAnswer = (ans, score) => {
		addQnaData(question, ans, score);
		changeScore(score);
	};

	return (
		<div>
			{isMobile ? (
				<Question>
					<QuestionContainer>
						<QuestionNumber>Q{count}.</QuestionNumber>
						<QuestionContent>{question}</QuestionContent>
						<div style={{ margin: "12vh 0" }} />
						{answer.map((v) => {
							return (
								<ButtonForm key={v.text} onClick={() => selectAnswer(v.text, v.score)}>
									{v.text}
								</ButtonForm>
							);
						})}
					</QuestionContainer>
				</Question>
			) : (
				<Question>
					<QuestionContainer>
						<QuestionNumber>Q{count}.</QuestionNumber>
						<QuestionContent>{question}</QuestionContent>
						<div style={{ margin: "15vh 0" }} />
						{answer.map((v) => {
							return (
								<ButtonForm key={v.text} onClick={() => setTimeout(selectAnswer(v.text, v.score), 250)}>
									{v.text}
								</ButtonForm>
							);
						})}
					</QuestionContainer>
				</Question>
			)}
		</div>
	);
};

export default AddictedComponent;
