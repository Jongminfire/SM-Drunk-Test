import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled, { css } from 'styled-components';
import WaveEffect from '../Functions/WaveEffect';
import '../Pages/WelcomePage.scss';

import ClipboardIcon from '../image/ClipboardIcon.png';
import FacebookIcon from '../image/FacebookIcon.png';
import KakaotalkIcon from '../image/KakaotalkIcon.png';
import Button from "@material-ui/core/Button";
import Lottie from 'react-lottie';
import * as startButton from '../image/startButton.json'
import * as share from '../image/share.json'
const { Kakao } = window;

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
  background-color: #d4f2f6;
  opacity: 0.75;
  width: 90%;
  height: 80%;
  border-radius: 10px;
  right: 5%;
  top: 10%;
`;

const onClickFacebook = () => {
  console.log('facebook');
  window.open(
    'https://www.facebook.com/sharer/sharer.php?u=https://drunktest.run.goorm.io'
  );
};

const doCopy = (text) => {
  if (!document.queryCommandSupported('copy')) {
    return alert('복사하기가 지원되지 않습니다.');
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.top = 0;
  textarea.style.left = 0;
  textarea.style.display = 'fixed';

  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('클립보드에 복사되었습니다.');
};

const KakaoSendMessage = () => {
  Kakao.Link.sendCustom({
    templateId: 53526,
    templateArgs: {
      title: '제목',
      description: '설명',
    },
  });
};

const WelcomePageMobile = (props) => {
  const { onClickStart } = props;
  console.log(Kakao);
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
        <div style={{position:"relative", top:"2vh"}}>
          <div className="Title-font-Mobile">음주가無</div>
          <div className="Main-font-Mobile">
          <h2 style={{display:"inline"}}>!!</h2> 전 세계 국가들의 술 소비량 순위 중 우리나라가 <b>11번째</b>를 차지한 것 알고 계셨나요~? <br/><br/>

일년 동안 평균 <b>259.8L</b>의 술을 먹는 대한민국에서 살아 남기 어려울 것 같네요 ㅠㅠ 이는 맥주캔으로 환산하면 무려 <b>668캔</b>이라고 합니다!
 이에 질 수 없는 당신... 당신의 주량은 과연 어느 위치에 있을 까요? <strong>* 두구두구두구 *</strong> <br/><br></br>

궁금하다면 같이 확인하러 가볼까요~? 
          </div>
          <div className="Button-div-Mobile">
            <div style={{width:"100%", margin:"0 auto", position:"relative", top:"-20px"}}  >

              <Lottie options={defaultOptions} width={200} height={80}/>
            </div>
           
              <span onClick={onClickStart} style={{position:"absolute", height:"50px",zIndex:"10",top:"10px",display:"inline-block", margin:"0 auto",textAlign:"center", backgroundColor:"none", color:"white"}}className="Button-start">
              테스트 시작하기 
            </span>
          </div>

          <div className="Share-it-font-Mobile">
            <span className="shareAni">Share it!</span> 
          <span style={{display:"inline-block", position:"relative", top:"15px", left:"6px"}}>
            <Lottie options={defaultOptions2} width={50} height={50}/>
          </span>
          
          </div>
          <div class="Button-share-div">
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

export default WelcomePageMobile;
