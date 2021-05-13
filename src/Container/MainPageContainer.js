import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MainPage from '../Pages/MainPage';
import MainPageMobile from '../Mobile/MainPageMobile';
import Questions1 from '../Questions/Question1';
import Questions2 from '../Questions/Question2';
import Questions3 from '../Questions/Question3';
import Questions4 from '../Questions/Question4';
import Questions5 from '../Questions/Question5';
import Questions6 from '../Questions/Question6';
import Questions7 from '../Questions/Question7';
import Questions8 from '../Questions/Question8';
import Questions9 from '../Questions/Question9';
import Questions10 from '../Questions/Question10';
import Questions from '../Questions/Question';

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
	const [ score, setScore ] = useState(0);
	const [ index, setIndex ] = useState(1);

	const onClickFinish = useCallback(() => {
		history.push('/result');
	}, []);

	const changeScore = (num) => {
		setScore(score + num);
		increaseIndex();
	};

	const increaseIndex = () => {
		setIndex(index + 1);
	};

	const decreaseIndex = () => {
		setIndex(index + 1);
	};

	const showQuestion = () => {
		switch (index) {
			case 1:
				return (
					<Questions1
						score={score}
						setScore={setScore}
						setIndex={setIndex}
						changeScore={changeScore}
						isMobile={isMobile}
					/>
				);
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				return (
					<Questions
						score={score}
						setScore={setScore}
						setIndex={setIndex}
						changeScore={changeScore}
						isMobile={isMobile}
						index={index}
					/>
				);
		}
	};

	return (
		<div>
			<Desktop>
				<MainPage onClickFinish={onClickFinish} showQuestion={showQuestion} score={score} />
			</Desktop>
			<Mobile>
				<MainPageMobile onClickFinish={onClickFinish} showQuestion={showQuestion} score={score} />
			</Mobile>
		</div>
	);
};

export default Main;
