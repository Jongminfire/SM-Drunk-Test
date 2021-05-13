import React, { useCallback, useState } from "react";
import { Router, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MainPage from "../Pages/MainPage";
import MainPageMobile from "../Mobile/MainPageMobile";
import Questions1 from "../Questions/Question1";
import Questions2 from "../Questions/Question2";
import Questions3 from "../Questions/Question3";
import Questions4 from "../Questions/Question4";
import Questions5 from "../Questions/Question5";
import EndQuestion from "../Questions/EndQuestion";
import AddictedComponent from "../Questions/AddictedComponent";
import TmiComponent from "../Questions/TmiComponent";
import questionText from "../questionText.json";
import { v4 as uuidv4 } from "uuid";

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile ? children : null;
};

const makeRandomQuestion = (data) => {
	let size = data.length;
	let numbers = [];
	let questions = [];

	for (let i = 0; i < size; i++) {
		numbers[i] = Math.floor(Math.random() * size);

		for (let j = 0; j < i; j++) {
			if (numbers[i] === numbers[j]) {
				i--;
				break;
			}
		}
	}

	questions = numbers.map((v) => data[v]);

	return questions;
};

const Main = () => {
	const history = useHistory();
	const isMobile = useMediaQuery({ maxWidth: 767 }) ? true : false;
	const [score, setScore] = useState(0);
	const [index, setIndex] = useState(1);
	const [count, setCount] = useState(1);
	const [stag, setStag] = useState(0);

	const [cards, setCards] = useState([]);
	const [answers, setAnswers] = useState([]);
	const [qnaData, setqnaData] = useState([]);

	const onFinish = () => {
		history.push({ pathname: "/result", state: { qnaData: qnaData, score: score } });
	};

	const addCard = (data) => {
		const temp = {
			id: uuidv4(),
			bg: data.bg,
			title: data.title,
			info: data.info,
			img: data.img,
		};

		setCards([...cards, temp]);
	};

	const addQnaData = (q, a, s) => {
		const temp = {
			question: q,
			answer: a,
			score: s || s === 0 ? s : "none",
		};
		setqnaData([...qnaData, temp]);
	};

	const changeScore = (num) => {
		console.log(score, num);
		setScore(score + num);
		setCount(count + 1);
		increaseIndex();
	};

	const increaseIndex = () => {
		setIndex(index + 1);
		setCount(count + 1);
		setStag((stag + 1) % 4);
		console.log(stag);
	};

	const [tmiQuestions, setTMI] = useState(makeRandomQuestion(questionText.card));
	const [addictedQuestions, setAddicted] = useState(makeRandomQuestion(questionText.form));

	const showQuestion = () => {
		if (index <= 5) {
			switch (index) {
				case 1:
					return (
						<Questions1
							score={score}
							setScore={setScore}
							setIndex={setIndex}
							changeScore={changeScore}
							isMobile={isMobile}
							count={count}
							setCount={setCount}
							increaseIndex={increaseIndex}
							setAnswers={setAnswers}
							setCards={setCards}
							addQnaData={addQnaData}
						/>
					);
				case 2:
					return (
						<Questions2
							score={score}
							setScore={setScore}
							setIndex={setIndex}
							changeScore={changeScore}
							isMobile={isMobile}
							count={count}
							setCount={setCount}
							increaseIndex={increaseIndex}
							setAnswers={setAnswers}
							addQnaData={addQnaData}
						/>
					);
				case 3:
					return (
						<Questions3
							score={score}
							setScore={setScore}
							setIndex={setIndex}
							changeScore={changeScore}
							isMobile={isMobile}
							count={count}
							setCount={setCount}
							increaseIndex={increaseIndex}
							setAnswers={setAnswers}
							addQnaData={addQnaData}
						/>
					);
				case 4:
					return (
						<Questions4
							score={score}
							setScore={setScore}
							setIndex={setIndex}
							changeScore={changeScore}
							isMobile={isMobile}
							count={count}
							setCount={setCount}
							increaseIndex={increaseIndex}
							setAnswers={setAnswers}
							addQnaData={addQnaData}
						/>
					);
				case 5:
					return (
						<Questions5
							score={score}
							setScore={setScore}
							setIndex={setIndex}
							changeScore={changeScore}
							isMobile={isMobile}
							count={count}
							setCount={setCount}
							increaseIndex={increaseIndex}
							setAnswers={setAnswers}
							addQnaData={addQnaData}
						/>
					);
			}
		} else if (index >= 26) {
			return (
				<>
					<EndQuestion onFinish={onFinish} />
				</>
			);
		} else if (index > 5 && index <= 15) {
			return (
				<AddictedComponent
					data={addictedQuestions[index - 5]}
					score={score}
					setScore={setScore}
					setIndex={setIndex}
					changeScore={changeScore}
					isMobile={isMobile}
					count={count}
					setCount={setCount}
					increaseIndex={increaseIndex}
					addQnaData={addQnaData}
					addCard={addCard}
				/>
			);
		} else {
			return (
				<TmiComponent
					data={tmiQuestions[index - 15]}
					score={score}
					setScore={setScore}
					setIndex={setIndex}
					changeScore={changeScore}
					isMobile={isMobile}
					count={count}
					setCount={setCount}
					increaseIndex={increaseIndex}
					addQnaData={addQnaData}
					addCard={addCard}
				/>
			);
		}
	};

	return (
		<div>
			<Desktop>
				<MainPage setCards={setCards} setAnswers={setAnswers} showQuestion={showQuestion} score={score} index={index} count={count} stag={stag} cards={cards} />
			</Desktop>
			<Mobile>
				<MainPageMobile showQuestion={showQuestion} score={score} count={count} stag={stag} cards={cards} setCards={setCards} />
			</Mobile>
		</div>
	);
};

export default Main;
