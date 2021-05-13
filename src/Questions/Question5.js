import React from "react";
import styled, { css } from "styled-components";

const Question = styled.div`
	background-color: #d4f3f6;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const QuestionMobile = styled.div`
	background-color: #d4f3f6;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Question5 = (props) => {
	const { score, setScore, setIndex, changeScore, isMobile } = props;
	const cost = 1;

	return (
		<div>
			{isMobile ? (
				<QuestionMobile>
					다섯번째 설문 (Mobile) 입니다.
					<button onClick={() => changeScore(cost)}>ok</button>
					<button onClick={() => changeScore(-cost)}>no</button>
				</QuestionMobile>
			) : (
				<Question>
					다섯번째 설문 (PC) 입니다.
					<button onClick={() => changeScore(cost)}>ok</button>
					<button onClick={() => changeScore(-cost)}>no</button>
				</Question>
			)}
		</div>
	);
};

export default Question5;