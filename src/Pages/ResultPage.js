import React from "react";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";
import lroabats from "../Datasets/amount_of_drinking/low_risk_of_alcohol_by_alcohol_type_samsungSeoulHospital.json";

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

const ResultPage = (props) => {
	const { qnaData, score } = props;
	const name = localStorage.getItem("userName");
	const weight = localStorage.getItem("userWeight");
	const alcoholAmount = weight*0.1*24/2/6.76;
	const sojuBottle = Math.round(Math.round(alcoholAmount)/7);
	const sojuGlass = Math.round(alcoholAmount)%7;

	//const alcoholConsumption;
	 

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
				<br />
				<div>{name}님의 권장 음주량은 소주 {sojuBottle}병 {sojuGlass}잔 입니다!</div>
				<div>※개인 체질을 배제하고 체중만을 고려한 값 입니다.</div>
				//{lroabats}
				<Title>총 점수 : {score}</Title>
			</Contents>
		</Background>
	);
};

export default ResultPage;
