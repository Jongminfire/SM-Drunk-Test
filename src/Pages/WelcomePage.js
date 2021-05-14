import React from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";
import WaveEffect from "../Functions/WaveEffect";
import "./WelcomePage.scss";
import Button from "@material-ui/core/Button";
import Background from "../Components/Background";

import ClipboardIcon from '../image/ClipboardIcon.png';
import FacebookIcon from '../image/FacebookIcon.png';
import KakaotalkIcon from '../image/KakaotalkIcon.png';
import Lottie from 'react-lottie';
import * as startButton from '../image/startButton.json'
import * as share from '../image/share.json'
const { Kakao } = window;

const Contents = styled.div`
	display: flex;
	top: 5%;
	min-width: 300px;
	max-width: 500px;
	width: 50vw;
	height: 100vh;
	background-color: #d4f2f6;
	margin: auto;
	margin-top: 5vh;
	border-radius: 10px 10px 0px 0px;
	opacity: 0.75;
	padding-left: 5vw;
	padding-right: 5vw;
`;

const onClickFacebook = () => {
	console.log("facebook");
	window.open("https://www.facebook.com/sharer/sharer.php?u=https://drunktest.run.goorm.io");
};

const doCopy = (text) => {
	if (!document.queryCommandSupported("copy")) {
		return alert("복사하기가 지원되지 않습니다.");
	}
	const textarea = document.createElement("textarea");
	textarea.value = text;
	textarea.style.top = 0;
	textarea.style.left = 0;
	textarea.style.display = "fixed";

	document.body.appendChild(textarea);
	textarea.focus();
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("클립보드에 복사되었습니다.");
};

const KakaoSendMessage = () => {
	Kakao.Link.sendCustom({
		templateId: 53526,
		templateArgs: {
			title: "제목",
			description: "설명",
		},
	});
};

const WelcomePage = (props) => {
  const { onClickStart } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: startButton.default,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true, 
    animationData: share.default,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Background>
      <Contents>
        <div>
          <div className="Title-font">음주가無</div>
          <div className="Main-font">
          <h2 style={{display:"inline"}}>!!</h2> 전 세계 국가들의 술 소비량 순위 중 우리나라가 <b>11번째</b>를 차지한 것 알고 계셨나요~? <br/><br/>

일년 동안 평균 <b>259.8L</b>의 술을 먹는 대한민국에서 살아 남기 어려울 것 같네요 ㅠㅠ 이는 맥주캔으로 환산하면 무려 <b>668캔</b>이라고 합니다!
 이에 질 수 없는 당신... 당신의 주량은 과연 어느 위치에 있을 까요? <strong>* 두구두구두구 *</strong> <br/><br></br>

궁금하다면 같이 확인하러 가볼까요~? 
          </div>
          <div class="Button-div">
          <Lottie options={defaultOptions} width={200} height={80}/>
              <div onClick={onClickStart} style={{position:"absolute", cursor:"pointer",height:"50px",zIndex:"10",top:"30px",display:"block", margin:"0 auto",textAlign:"center", backgroundColor:"none", color:"white"}}className="Button-start">
              테스트 시작하기 
            </div>
          </div>
          <div className="Share-it-font" style={{display:"relative", top:"-50px", left:"50px"}}>
            
          <span className="shareAni">Share it!</span> 
          <span style={{display:"inline-block", position:"relative", top:"15px", left:"6px"}}>
            <Lottie options={defaultOptions2} width={50} height={50}/>
          </span>
          
          
          </div>
          <div class="Button-share-div" style={{position:"relative", top:"-70px"}}>
            <div>
              <button
                onClick={() => {
                  KakaoSendMessage();
                }}
                className="Button-share"
                style={{
                  backgroundImage: `url(${KakaotalkIcon})`,
                  backgroundSize: 'contain',
                }}
              ></button>
            </div>

            <div>
              <button
                onClick={onClickFacebook}
                className="Button-share"
                style={{
                  backgroundImage: `url(${FacebookIcon})`,
                  backgroundSize: 'contain',
                }}
              ></button>
            </div>
            <div>
              <button
                onClick={() => {
                  doCopy('https://drunktest.run.goorm.io');
                }}
                className="Button-share"
                style={{
                  backgroundImage: `url(${ClipboardIcon})`,
                  backgroundSize: 'contain',
                }}
              ></button>
            </div>
          </div>
        </div>
      </Contents>
      <WaveEffect />
    </Background>
  );
};

export default WelcomePage;
