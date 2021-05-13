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
	const [weight, setWeight] = useState(0);
	const name = localStorage.getItem("userName");
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const onChangeWeight = (e) => {
		let tempWeight = e.target.value;

		if (tempWeight.length >= 4) {
			tempWeight = tempWeight.slice(0, 3);
		}
		setWeight(Number(tempWeight));
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			checkWeight();
		}
	};

	const checkWeight = () => {
		if (!weight || weight === 0 || !Number.isInteger(weight)) {
			Swal.fire({
				title: "체중을 입력해주세요",
				icon: "error",
				confirmButtonText: "닫기",
				confirmButtonColor: "#DB6867",
			});
		} else {
			window.localStorage.setItem("userWeight", weight);
			addQnaData("당신의 체중을 알려주세요", weight);
			increaseIndex();
		}
	};

	return (
		<div>
			{isMobile ? (
				<QuestionMobile>
					<QuestionNumberMobile>Q{count}.</QuestionNumberMobile>
					<QuestionContentMobile>
						{name}님 반갑습니다! <br /> 당신의 체중을 알려주세요
					</QuestionContentMobile>
					<div style={{ margin: "6vh 0" }} />
					<div>
						<InputFormMobile onChange={onChangeWeight} maxLength="3" target={weight} ref={inputRef}></InputFormMobile>
						<span style={{ color: "#126e82", fontSize: "2rem", paddingLeft: "1rem" }}>KG</span>
					</div>
					<NextButtonMobile onClick={checkWeight}>
						다음 <ArrowForwardIosIcon />
					</NextButtonMobile>
				</QuestionMobile>
			) : (
				<Question>
					<QuestionContainer>
						<QuestionNumber>Q{count}.</QuestionNumber>
						<QuestionContent>
							{name}님 반갑습니다! <br /> 당신의 체중을 알려주세요
						</QuestionContent>
						<div style={{ margin: "7vh 0" }} />
						<InputForm onChange={onChangeWeight} maxLength="3" target={weight} onKeyPress={handleKeyPress} ref={inputRef}></InputForm>
						<span style={{ color: "#126e82", fontSize: "2.5rem", paddingLeft: "1rem" }}>KG</span>
					</QuestionContainer>
					<NextButton onClick={checkWeight}>
						다음 <ArrowForwardIosIcon />
					</NextButton>
				</Question>
			)}
		</div>
	);
};

export default Question2;
