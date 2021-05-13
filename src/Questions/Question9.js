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

const Question9 = (props) => {
	const { score, setScore, setIndex, changeScore, isMobile } = props;
	const cost = 9;

	return (
		<div>
			{isMobile ? (
				<QuestionMobile>
					아홉번째 설문 (Mobile) 입니다.
					<button onClick={changeScore(cost)}>ok</button>
					<button onClick={changeScore(-cost)}>no</button>
				</QuestionMobile>
			) : (
				<Question>
					아홉번째 설문 (PC) 입니다.
					<button onClick={changeScore(cost)}>ok</button>
					<button onClick={changeScore(-cost)}>no</button>
				</Question>
			)}
		</div>
	);
};

export default Question9;
