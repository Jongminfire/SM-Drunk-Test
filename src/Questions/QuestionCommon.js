
import styled, { css } from "styled-components";
import "../fonts/fonts.scss";

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
padding: 2vh 2vw 6vh 2vw;
& button{
    font-family:"Noto Sans KR";
    font-weight:600;
}
& input{
    font-family:"Noto Sans KR";
    font-weight:600;
}
`;

export const QuestionContainer = styled.div`
padding: 0 6vw 2vh 2vw;
`;

export const QuestionNumber = styled.div`
color: #126e82;
font-size: 3rem;
font-family: "IBMPlexSansKR";
font-weight: 200;
`;

export const QuestionContent = styled.div`
color: #126e82;
font-size: 3rem;
font-family: "IBMPlexSansKR";
font-weight: bold;
max-width: 50vw;
padding-top: 4vh;
word-wrap:break-all;
word-break:keep-all;
`;
