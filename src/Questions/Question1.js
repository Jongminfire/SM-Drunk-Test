import React, { useState, useRef, useEffect } from "react";
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

const Question1 = (props) => {
	const { score, setScore, setIndex, changeScore, isMobile, count, increaseIndex, setAnswers, setCards } = props;
	const [name, setName] = useState("");
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const onChangeName = (e) => {
		setName(e.target.value);
		console.log(name);
	};

	const handleKeyPress = (e) => {
		console.log(e.key);
		if (e.key === "Enter") {
			checkName();
		}
	};

	const checkName = () => {
		const temp = name.replace(/ /g, "");

		if (temp.length == 0) {
			alert("이름을 입력해주세요");
		} else {
			window.localStorage.setItem("userName", name);
			increaseIndex();
		}
	};

	return (
		<div>
			{isMobile ? (
				<Question>
					<QuestionContainer>
						<QuestionNumber>Q{count}.</QuestionNumber>
						<QuestionContent>당신의 이름은 무엇인가요?</QuestionContent>
						<div style={{ margin: "8vh 0" }} />
						<InputForm onChange={onChangeName} maxLength="15" ref={inputRef} />
					</QuestionContainer>
					<NextButton onClick={checkName}>
						다음 <ArrowForwardIosIcon />
					</NextButton>
				</Question>
			) : (
				<Question>
					<QuestionContainer>
						<QuestionNumber>Q{count}.</QuestionNumber>
						<QuestionContent>당신의 이름은 무엇인가요?</QuestionContent>
						<div style={{ margin: "8vh 0" }} />
						<InputForm onChange={onChangeName} maxLength="15" onKeyPress={handleKeyPress} ref={inputRef} />
					</QuestionContainer>
					<NextButton onClick={checkName}>
						다음 <ArrowForwardIosIcon />
					</NextButton>
				</Question>
			)}
		</div>
	);
};

export default Question1;
