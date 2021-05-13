import React from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";

const Background = styled.div`
	background-color: #51c4d3;
	width: 100%;
	height: 100vh;
`;

const Contents = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #d4f2f6;
	width: 90%;
	height: 80%;
	border-radius: 10px;
	right: 5%;
	top: 10%;
`;

const WelcomePageMobile = (props) => {
	const { onClickStart } = props;
	return (
		<Background>
			<Contents>
				<div>
					모바일 웰컴페이지 입니다.
					<br />
					<button onClick={onClickStart}>테스트 시작하기</button>
				</div>
			</Contents>
		</Background>
	);
};

export default WelcomePageMobile;
