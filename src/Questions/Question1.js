import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Swal from "sweetalert2";

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
	font-size: 3.5rem;
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
	width: 70vw;
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

const Question1 = (props) => {
	const { score, setScore, setIndex, changeScore, isMobile, count, increaseIndex, setAnswers, setCards, addQnaData } = props;
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
			Swal.fire({
				title: "이름을 입력해주세요",
				icon: "error",
				confirmButtonText: "닫기",
				confirmButtonColor: "#DB6867",
			});
		} else {
			window.localStorage.setItem("userName", name);
			addQnaData("당신의 이름은 무엇인가요?", name);
			increaseIndex();
		}
	};

	return (
		<div>
			{isMobile ? (
				<QuestionMobile>
					<QuestionNumberMobile>Q{count}.</QuestionNumberMobile>
					<QuestionContentMobile>당신의 이름은 무엇인가요?</QuestionContentMobile>
					<div style={{ margin: "7vh 0" }} />
					<InputFormMobile onChange={onChangeName} maxLength="15" ref={inputRef} />

					<NextButtonMobile onClick={checkName}>
						다음 <ArrowForwardIosIcon />
					</NextButtonMobile>
				</QuestionMobile>
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
