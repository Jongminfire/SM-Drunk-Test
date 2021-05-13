import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled, { css } from 'styled-components';
import lroabats from '../Datasets/amount_of_drinking/low_risk_of_alcohol_by_alcohol_type_samsungSeoulHospital.json';
import bdrk from '../Datasets/amount_of_drinking/binge_drinking_rate_kIndicator.json';
import wdacss from '../Datasets/amount_of_drinking/who_daily_alcohol_consumption_standards_samsungSeoulHospital.json';
import ebds from '../Datasets/empty_bottle_deposit/empty_bottle_deposit_statMe.json';
import trac from '../Datasets/harmful_effects_of_drinking/traffic_accident_status_by_year_knpa.json';

const Background = styled.div`
	width: 100%;
	height: 100vh;
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
`;

const Contents = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #d4f2f6;
	opacity: 0.75;
	width: 90%;
	height: 80%;
	border-radius: 10px;
	right: 5%;
	top: 10%;
`;

const Title = styled.div`
	font-size: 4em;
	text-align: center;
	margin-top: 5vh;
	font-weight: bold;
	color: #126e82;
	font-family: "IBMPlexSansKR";
	font-weight: bold;
`;

const ResultPage = (props) => {
	const { qnaData, score } = props;
	const name = localStorage.getItem('userName');
	const weight = localStorage.getItem('userWeight');
	const gen = localStorage.getItem('gender');
	const alcoholAmount = weight * 0.1 * 24 / 2 / 6.76;
	const sojuBottle = Math.round(Math.round(alcoholAmount) / 7);
	const sojuGlass = Math.round(alcoholAmount) % 7;

	const bCount = localStorage.getItem('bottleCount');
	const type = localStorage.getItem('drinkType');

	let str_ = '201';
	const Medi = [];
	for (let k = 0; k < 4; k++) {
		let sum_ = 0;
		for (let i = 1; i <= 7; i++) {
			sum_ += parseInt(trac[k][str_ + i]);
		}
		Medi.push(Math.floor(sum_ / 7));
	}
	const [ d1, d2 ] = [ Math.round(Medi[0] / Medi[2], 2), Math.round(Medi[1] / Medi[3], 2) ];

	let calType;
	if (type === '소주') calType = lroabats[7]['알코올 함량(g)'];
	else if (type === '맥주') calType = lroabats[0]['알코올 함량(g)'];
	else if (type === '양주') calType = lroabats[9]['알코올 함량(g)'];
	else if (type === '막걸리') calType = lroabats[3]['알코올 함량(g)'];
	else if (type === '와인') calType = lroabats[4]['알코올 함량(g)'];
	const alcoholConsumption = calType * bCount;
	const sojuprice = Math.floor(alcoholConsumption * 52 / (6.7 * 7)) * 1800;

	let overdoseStatement;
	if (alcoholConsumption >= 56) {
		if (gen === '남성') overdoseStatement = `${name}님은 월 1회 이상 한 번의 술자리에서 폭음을 한 남성 ${bdrk[1]['2019']}%에 포함됩니다!`;
		else if (gen === '여성') overdoseStatement = `${name}님은 월 1회 이상 한 번의 술자리에서 폭음을 한 여성 ${bdrk[8]['2019']}%에 포함됩니다!`;
	} else {
		if (gen === '남성')
			overdoseStatement = `${name}님은 월 1회 이상 한 번의 술자리에서 폭음을 하지 않은 남성 ${100 - bdrk[1]['2019']}%에 포함됩니다!`;
		else if (gen === '여성')
			overdoseStatement = `${name}님은 월 1회 이상 한 번의 술자리에서 폭음을 하지 않은 여성 ${100 - bdrk[8]['2019']}%에 포함됩니다!`;
	}

	let whoStatement;
	if (gen === '남성') {
		if (alcoholConsumption >= 101) whoStatement = wdacss[3]['구분'];
		else if (alcoholConsumption >= 61) whoStatement = wdacss[2]['구분'];
		else if (alcoholConsumption >= 41) whoStatement = wdacss[1]['구분'];
		else whoStatement = wdacss[0]['구분'];
	} else {
		if (alcoholConsumption >= 61) whoStatement = wdacss[3]['구분'];
		else if (alcoholConsumption >= 41) whoStatement = wdacss[2]['구분'];
		else if (alcoholConsumption >= 21) whoStatement = wdacss[1]['구분'];
		else whoStatement = wdacss[0]['구분'];
	}

	const sojuBottleDeposit = Math.floor(alcoholConsumption / (6.76 * 7)) * ebds[0]['개당 가격(원)'];

	return (
		<Background>
			<Contents>
				<Title>{name}님의 결과입니다.</Title>
				<div>
					<h3>
						{name}님의 권장 음주량은 소주 {sojuBottle}병 {sojuGlass}잔 입니다!
					</h3>
				</div>
				<div>※개인 체질을 배제하고 체중만을 고려한 값 입니다.</div>
				<div>
					<h3>{overdoseStatement}</h3>
				</div>
				<div>※2019년을 기준으로 한 값 입니다.</div>
				<div>
					<h3>
						{name}님은 성인{gen} WHO 알코올 섭취 기준 대비 {whoStatement}에 속합니다!
					</h3>
				</div>
				<div>
					<h3>
						지난 7년간의 데이터를 분석하면, 전체 교통사고 건수 대비 음주로 인한 교통사고 건수는 {d1}%이며, 전체 사망자 수 대비 음주교통사고로 인한 사망자 비율은 {d2}%
						입니다.
					</h3>
				</div>
				<div>
					<h3>
						그때 마신 술의 양이라면 소주병 기준 <span style={{ color: 'red' }}>{sojuBottleDeposit}</span>원을 보증금으로 돌려받을 수
						있습니다!
					</h3>
				</div>
				<div>
					<h3>
						만약 당신이 술마실돈으로 도지코인에 투자했다면 지금쯤 당신은{' '}
						<span style={{ color: 'red', fontSize: '30px' }}>{sojuBottleDeposit * 5000}</span>원 을 벌었을 겁니다.
					</h3>
				</div>
				<Title>총 점수 : {score}</Title>
			</Contents>
		</Background>
	);
};

export default ResultPage;