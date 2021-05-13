import React from "react";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";

const Background = styled.div`
	width: 100%;
	height: 100vh;
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
`;

const Contents = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #d4f2f6;
	opacity: 0.75;
	width: 90%;
	height: 80%;
	border-radius: 10px;
	right: 5%;
	top: 10%;
`;

const Title = styled.div`
	font-size: 4em;
	text-align: center;
	margin-top: 5vh;
	font-weight: bold;
	color: #126e82;
	font-family: "IBMPlexSansKR";
	font-weight: bold;
`;

const ResultPageMobile = (props) => {
	// qnaData의 값은 question: 질문 , answer: 해당 유저의 답변, score: (0:정답, 1<= : 부정적 답변 , none: 이름,체중 ..)
	const { qnaData, score } = props;

	const name = localStorage.getItem("userName");

	return (
		<Background>
			<Contents>
				<Title>{name}님의 결과입니다.</Title>
				<br />
				{qnaData.map((v) => (
					<div>
						{v.question} : {v.answer}
						{/* {v.score === "none" ? "" : v.score === 0 ? "👍" : "👎"} */}
					</div>
				))}
				<Title>총 점수 : {score}</Title>
			</Contents>
		</Background>
	);
};

export default ResultPageMobile;
