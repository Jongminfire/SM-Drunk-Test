import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import WaveEffect from '../Functions/WaveEffect';
import { useSpring, animated, to } from '@react-spring/web';
import { v4 as uuidv4 } from 'uuid';
import styled, { css } from 'styled-components';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import styles from './MainPage.scss';

import Question1 from '../Questions/Question1';
import Background from '../Components/Background';
import { CardPopup, CardDrawer } from '../Components/Card';

const StyledButton = styled.button`
	margin: 1%;
	padding: 1%;
	width: 7%;
	border-radius: 20px;
	border-color: white;
`;

const Contents = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #d4f2f6;
	min-width: 65vw;
	min-height: 50vh;
	border-radius: 15px;
	left: 5vw;
	top: 10vh;
`;

const OtherBackground = () => {
	const [ stag, setStag ] = React.useState(0);
	const clk = () => {
		console.log(stag);
		if (stag == 0) {
			setStag(1);
		} else if (stag == 1) {
			setStag(2);
			setTimeout(() => {
				setStag(3);
				setTimeout(() => {
					setStag(0);
				}, 0.5 * 1000);
			}, 0.5 * 1000);
		} else if (stag == 2) {
			return;
		}
	};
	return <div className="othbg" stag={stag} onClick={clk} />;
};

const MainPage = (props) => {
	const { showQuestion, score, setCards, setAnswers } = props;
	const [ popped, setPopped ] = useState(false);
	const [ selectedCard, setSelectedCard ] = useState(null);
	const [ testcards, setTestcards ] = useState([
		{ id: uuidv4(), bg: 'linear-gradient(153.55deg, #879AF2 9.48%, #D3208B 48.25%, #FDA000 85.78%)' },
		{ id: uuidv4(), bg: '#D3208B' },
		{ id: uuidv4(), bg: 'linear-gradient(to right, #00c6ff, #0072ff)' },
		{ id: uuidv4(), bg: 'linear-gradient(to right, #780206, #061161)' },
		{ id: uuidv4(), bg: 'linear-gradient(to right, #f0c27b, #4b1248)' }
	]);
	const [ testcards2, setTestcards2 ] = useState([]);

	function cadni() {
		if (testcards.length > 0) {
			const joined = testcards2.concat(testcards[testcards.length - 1]);
			setTestcards2(joined);
			setTestcards(testcards.slice(0, -1));
		}
	}
	function cadji() {
		if (testcards2.length > 0) {
			const joined = testcards.concat(testcards2[testcards2.length - 1]);
			setTestcards(joined);
			setTestcards2(testcards2.slice(0, -1));
		}
	}

	return (
		<Background>
			<OtherBackground />
			<Contents>{showQuestion()}</Contents>
			<StyledButton onClick={cadji}>카드넣기</StyledButton>
			<StyledButton onClick={cadni}>카드빼기</StyledButton>
			<CardDrawer
				clckevent={(card) => {
					setPopped(true);
					setSelectedCard(card);
				}}
				cards={testcards}
			/>
			{/* <WaveEffect/> */}
			<CardPopup popped={popped} setPopped={setPopped} card={selectedCard} />
		</Background>
	);
};

export default MainPage;
