import React, { useState } from "react";
import styled, { css } from "styled-components";

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

const Question2 = (props) => {
	const { score, setScore, setIndex, changeScore, isMobile, count, increaseIndex } = props;
	const [weight, setWeight] = useState(0);
	const name = localStorage.getItem("userName");

	const onChangeWeight = (e) => {
		let tempWeight = e.target.value;

		if (tempWeight.length >= 4) {
			tempWeight = tempWeight.slice(0, 3);
		}
		setWeight(Number(tempWeight));
	};

	const checkName = () => {
		if (weight.length === 0 || weight === 0) {
			alert("체중을 입력해주세요");
		} else {
			window.localStorage.setItem("userWeight", weight);
			increaseIndex();
		}
	};

	return (
		<div>
			{isMobile ? (
				<Question>
					<QuestionContainer>
						<QuestionNumber>Q.{count}</QuestionNumber>
						<QuestionContent>당신의 이름은 무엇인가요?</QuestionContent>
						<div style={{ margin: "8vh 0" }} />
						<InputForm onChange={onChangeName} />
					</QuestionContainer>
					<NextButton onClick={checkName}>다음 ></NextButton>
				</Question>
			) : (
				<Question>
					<QuestionContainer>
						<QuestionNumber>Q.{count}</QuestionNumber>
						<QuestionContent>
							{name}님 반갑습니다! <br /> 당신의 체중을 알려주세요
						</QuestionContent>
						<div style={{ margin: "8vh 0" }} />
						<InputForm onChange={onChangeWeight} type="number" max="999" min="1" value={weight}></InputForm>
						<span style={{ color: "#126e82", fontSize: "2.5rem", paddingLeft: "1rem" }}>KG</span>
					</QuestionContainer>
					<NextButton onClick={checkName}>다음 ></NextButton>
				</Question>
			)}
		</div>
	);
};

export default Question2;
