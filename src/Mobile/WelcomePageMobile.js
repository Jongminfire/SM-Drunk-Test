import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled, { css } from 'styled-components';
import WaveEffect from '../Functions/WaveEffect';
import '../Pages/WelcomePage.scss';

import ClipboardIcon from '../image/ClipboardIcon.png';
import FacebookIcon from '../image/FacebookIcon.png';
import KakaotalkIcon from '../image/KakaotalkIcon.png';

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
  return (
    <Background>
      <Contents>
        <div>
          <div className="Title-font-Mobile">음주가無</div>
          <div className="Main-font-Mobile">
            Lorem ipsum dolor sot ametaaaaa, consectetur adipiscing elit ut
            aliqualm
          </div>
          <div class="Button-div-Mobile">
            <button onClick={onClickStart} className="Button-start">
              <div className="Button-font">테스트 시작하기</div>
            </button>
          </div>
          <div className="Share-it-font-Mobile">Share it! </div>
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
