import styled, { css } from 'styled-components';
import React from 'react';

// Some random colors
const colors = [ '#3CC157', '#2AA7FF', '#1B1B1B', '#FCBC0F', '#F85F36' ];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
	let ball = document.createElement('div');
	ball.classList.add('ball');
	ball.style.background = colors[Math.floor(Math.random() * colors.length)];
	ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
	ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
	ball.style.transform = `scale(${Math.random()})`;
	ball.style.width = `${Math.random()}em`;
	ball.style.height = ball.style.width;

	balls.push(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
	let to = {
		x: Math.random() * (i % 2 === 0 ? -11 : 11),
		y: Math.random() * 12
	};

	let anim = el.animate([ { transform: 'translate(0, 0)' }, { transform: `translate(${to.x}rem, ${to.y}rem)` } ], {
		duration: (Math.random() + 1) * 2000, // random duration
		direction: 'alternate',
		fill: 'both',
		iterations: Infinity,
		easing: 'ease-in-out'
	});
});

const Background = styled.div`
	position: relative;
	background-color: #51c4d3;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background: rgb(190, 255, 61);
	background: linear-gradient(
		180deg,
		rgba(190, 255, 61, 1) 0%,
		rgba(255, 255, 255, 1) 0%,
		rgba(136, 217, 255, 1) 41%,
		rgba(56, 189, 255, 1) 80%,
		rgba(12, 149, 255, 1) 95%,
		rgba(46, 122, 255, 1) 100%
	);
`;

const ball__ = styled.div`
	position: absolute;
	border-radius: 100%;
	opacity: 0.7;
	background-color: black;
`;

export default Background;
