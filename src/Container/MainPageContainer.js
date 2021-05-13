import React, { useCallback, useState } from "react";
import { Router, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MainPage from "../Pages/MainPage";
import MainPageMobile from "../Mobile/MainPageMobile";
import Questions1 from "../Questions/Question1";
import Questions2 from "../Questions/Question2";
import Questions3 from "../Questions/Question3";
import Questions4 from "../Questions/Question4";
import AddictedComponent from "../Questions/AddictedComponent";
import TmiComponent from "../Questions/TmiComponent";
import questionText from "../questionText.json";

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

	const [cards, setCards] = useState([]);
	const [answers, setAnswers] = useState([]);

	const onClickFinish = useCallback(() => {
		history.push("/result");
	}, []);

	const changeScore = (num) => {
		setScore(score + num);
		setCount(count + 1);
		increaseIndex();
	};

	const increaseIndex = () => {
		setIndex(index + 1);
		setCount(count + 1);
	};

	const [tmiQuestions, setTMI] = useState(makeRandomQuestion(questionText.card));
	const [addictedQuestions, setAddicted] = useState(makeRandomQuestion(questionText.form));

	const showQuestion = () => {
		if (index < 5) {
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
							setCards={setCards}
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
							setCards={setCards}
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
							setCards={setCards}
						/>
					);
			}
		} else if (index >= 20) {
			return <>질문끝</>;
		} else {
			if (index % 2 === 0) {
				return (
					<AddictedComponent
						data={addictedQuestions[parseInt((index - 4) / 2)]}
						score={score}
						setScore={setScore}
						setIndex={setIndex}
						changeScore={changeScore}
						isMobile={isMobile}
						count={count}
						setCount={setCount}
						increaseIndex={increaseIndex}
					/>
				);
			} else {
				return (
					<TmiComponent
						data={tmiQuestions[parseInt((index - 4) / 2)]}
						score={score}
						setScore={setScore}
						setIndex={setIndex}
						changeScore={changeScore}
						isMobile={isMobile}
						count={count}
						setCount={setCount}
						increaseIndex={increaseIndex}
					/>
				);
			}
		}
	};

	return (
		<div>
			<>
				<MainPage onClickFinish={onClickFinish} showQuestion={showQuestion} score={score} />
			</>

			<Mobile>
				<MainPageMobile onClickFinish={onClickFinish} showQuestion={showQuestion} score={score} index={index} />
			</Mobile>
		</div>
	);
};

export default Main;
