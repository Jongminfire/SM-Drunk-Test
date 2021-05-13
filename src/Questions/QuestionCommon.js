
import styled, { css } from "styled-components";

export const Question = styled.div`
position: absolute;
display: flex;
background-color: #d4f2f6;
min-width: 60vw;
max-width: 80vw;
min-height: 40vh;
border-radius: 15px;
left: 5vw;
top: 15vh;
`;

export const QuestionContainer = styled.div`
padding: 2vh 8vw 8vh 3vw;
`;

export const QuestionNumber = styled.div`
color: #126e82;
font-size: 4rem;
`;

export const QuestionContent = styled.div`
color: #126e82;
font-size: 2rem;
font-weight: bold;
max-width: 50vw;
padding-top: 4vh;
word-wrap:break-all;
word-break:keep-all;
`;
