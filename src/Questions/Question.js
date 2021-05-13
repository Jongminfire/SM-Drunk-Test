import React from 'react';
import styled, { css } from 'styled-components';

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

const text = [ '첫번째', '두번째', '세번째', '네번째', '다섯번째', '여섯번째', '일곱번째', '여덟번째', '아홉번째', '열번째' ];
const cost = [ 1, 2, 3, 4, 1, 6, 1, 8, 9, 10 ];

const Questions = (props) => {
	const { score, setScore, setIndex, changeScore, isMobile, index } = props;
	console.log(text[index - 1]);
	return (
		<div>
			{isMobile ? (
				<QuestionMobile>
					{text[index - 1]} 설문 (Mobile) 입니다.
					<button onClick={() => changeScore(cost[index - 1])}>ok</button>
					<button onClick={() => changeScore(-cost[index - 1])}>no</button>
				</QuestionMobile>
			) : (
				<Question>
					{text[index - 1]} 설문 (PC) 입니다.
					<button onClick={() => changeScore(cost[index - 1])}>ok</button>
					<button onClick={() => changeScore(-cost[index - 1])}>no</button>
				</Question>
			)}
		</div>
	);
};

export default Questions;
