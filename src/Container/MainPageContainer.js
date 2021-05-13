import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MainPage from "../Pages/MainPage";
import MainPageMobile from "../Mobile/MainPageMobile";
import Questions1 from "../Questions/Question1";
import Questions2 from "../Questions/Question2";
import Questions3 from "../Questions/Question3";
import Questions4 from "../Questions/Question4";
import Questions5 from "../Questions/Question5";
import Questions6 from "../Questions/Question6";
import Questions7 from "../Questions/Question7";
import Questions8 from "../Questions/Question7";
import Questions9 from "../Questions/Question9";
import Questions10 from "../Questions/Question10";

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile ? children : null;
};

const Main = () => {
	const history = useHistory();
	const isMobile = useMediaQuery({ maxWidth: 767 }) ? true : false;
	const [score, setScore] = useState(0);
	const [index, setIndex] = useState(1);
	const [count, setCount] = useState(1);

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

	const showQuestion = () => {
		switch (index) {
			case 1:
				return (
					<Questions1 score={score} setScore={setScore} setIndex={setIndex} changeScore={changeScore} isMobile={isMobile} count={count} setCount={setCount} increaseIndex={increaseIndex} />
				);
			case 2:
				return (
					<Questions2 score={score} setScore={setScore} setIndex={setIndex} changeScore={changeScore} isMobile={isMobile} count={count} setCount={setCount} increaseIndex={increaseIndex} />
				);
			case 3:
				return (
					<Questions3 score={score} setScore={setScore} setIndex={setIndex} changeScore={changeScore} isMobile={isMobile} count={count} setCount={setCount} increaseIndex={increaseIndex} />
				);
			case 4:
				return (
					<Questions4 score={score} setScore={setScore} setIndex={setIndex} changeScore={changeScore} isMobile={isMobile} count={count} setCount={setCount} increaseIndex={increaseIndex} />
				);
			case 5:
				return <Questions5 score={score} setScore={setScore} setIndex={setIndex} changeScore={changeScore} isMobile={isMobile} count={count} setCount={setCount} />;
			case 6:
				return <Questions6 score={score} setScore={setScore} setIndex={setIndex} changeScore={changeScore} isMobile={isMobile} count={count} setCount={setCount} />;
			case 7:
				return <Questions7 score={score} setScore={setScore} setIndex={setIndex} changeScore={changeScore} isMobile={isMobile} count={count} setCount={setCount} />;
			case 8:
				return <Questions8 score={score} setScore={setScore} setIndex={setIndex} changeScore={changeScore} isMobile={isMobile} count={count} setCount={setCount} />;
			case 9:
				return <Questions9 score={score} setScore={setScore} setIndex={setIndex} changeScore={changeScore} isMobile={isMobile} count={count} setCount={setCount} />;
			case 10:
				return <Questions10 score={score} setScore={setScore} setIndex={setIndex} changeScore={changeScore} isMobile={isMobile} count={count} setCount={setCount} />;
			default:
				return <div>설문이 종료되었습니다.</div>;
		}
	};

	return (
		<div>
			<Desktop>
				<MainPage onClickFinish={onClickFinish} showQuestion={showQuestion} score={score} index={index} />
			</Desktop>
			<Mobile>
				<MainPageMobile onClickFinish={onClickFinish} showQuestion={showQuestion} score={score} index={index} />
			</Mobile>
		</div>
	);
};

export default Main;
