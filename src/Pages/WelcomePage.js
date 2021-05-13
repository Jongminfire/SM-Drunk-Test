import React from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";
import WaveEffect from "../Functions/WaveEffect";
import "./WelcomePage.css";

import Background from "../Components/Background";

import KakaotalkIcon from "../image/KakaotalkIcon.png";
import FacebookIcon from "../image/FacebookIcon.png";
import InstagramIcon from "../image/InstagramIcon.png";

const Contents = styled.div`
	display: flex;
	top: 5%;
	min-width: 300px;
	max-width: 500px;
	width: 50vw;
	height: 100vh;
	background-color: #d4f2f6;
	margin: auto;
	margin-top: 5vh;
	border-radius: 10px 10px 0px 0px;
	opacity: 0.75;
	padding-left: 5vw;
	padding-right: 5vw;
`;

const WelcomePage = (props) => {
	const { onClickStart } = props;
	return (
		<Background>
			<Contents>
				<div>
					<div className="Title-font">음주가無</div>
					<div className="Main-font">테스트 테스트 테테스트 테테스트 테스트테 테스 테테테 테 테테테</div>
					<div class="Button-div">
						<button onClick={onClickStart} className="Button-start">
							<div className="Button-font">테스트 시작하기</div>
						</button>
					</div>
					<div className="Share-it-font">Share it! </div>
					<div class="Button-share-div">
						<div>
							<button
								onClick={onClickStart}
								className="Button-share"
								style={{
									// backgroundImage: `url(${KakaotalkIcon})`,
									backgroundSize: "contain",
								}}
							></button>
						</div>
						<div>
							<button
								onClick={onClickStart}
								className="Button-share"
								style={{
									// backgroundImage: `url(${FacebookIcon})`,
									backgroundSize: "contain",
								}}
							></button>
						</div>
						<div>
							<button
								onClick={onClickStart}
								className="Button-share"
								style={{
									// 	backgroundImage: `url(${InstagramIcon})`,
									backgroundSize: "contain",
								}}
							></button>
						</div>
					</div>
				</div>
			</Contents>
			<WaveEffect />
		</Background>
	);
};

export default WelcomePage;
