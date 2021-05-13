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

const Question2 = (props) => {
	const { score, setScore, setIndex, changeScore, isMobile, count, increaseIndex, setAnswers, setCards, addQnaData } = props;
	const [gender, setGender] = useState("");
	const name = localStorage.getItem("userName");

	const onClickType = (g) => {
		setGender(g);
		localStorage.setItem("gender", g);
		addQnaData("당신의 성별은 무엇인가요?", g);
		increaseIndex();
	};

	return (
		<div>
			{isMobile ? (
				<QuestionMobile>
					<QuestionNumberMobile>Q{count}.</QuestionNumberMobile>
					<QuestionContentMobile>
						{name}님 반갑습니다 👋 <br /> 당신의 성별을 알려주세요!
					</QuestionContentMobile>
					<div style={{ margin: "6vh 0" }} />
					<ButtonFormMobile onClick={() => onClickType("남성")}>남성 🙋‍♂️</ButtonFormMobile>
					<ButtonFormMobile onClick={() => onClickType("여성")}>여성 🙋‍♀️</ButtonFormMobile>
				</QuestionMobile>
			) : (
				<Question>
					<QuestionContainer>
						<QuestionNumber>Q{count}.</QuestionNumber>
						<QuestionContent>
							{name}님 반갑습니다 👋 <br /> 당신의 성별을 알려주세요!
						</QuestionContent>
						<div style={{ margin: "12vh 0" }}>
							<ButtonForm onClick={() => onClickType("남성")}>남성 🙋‍♂️</ButtonForm>
							<ButtonForm onClick={() => onClickType("여성")}>여성 🙋‍♀️</ButtonForm>
						</div>
					</QuestionContainer>
				</Question>
			)}
		</div>
	);
};

export default Question2;
