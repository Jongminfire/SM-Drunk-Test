import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled, { css } from 'styled-components';
import WaveEffect from '../Functions/WaveEffect';
import './WelcomePage.scss';

import Background from '../Components/Background';

import ClipboardIcon from '../image/ClipboardIcon.png';
import FacebookIcon from '../image/FacebookIcon.png';
import KakaotalkIcon from '../image/KakaotalkIcon.png';

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
  console.log('facebook');
  window.open(
    'https://www.facebook.com/sharer/sharer.php?u=https://naver.com/'
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

const WelcomePage = (props) => {
  const { onClickStart } = props;
  return (
    <Background>
      <Contents>
        <div>
          <div className="Title-font">음주가無</div>
          <div className="Main-font">
            테스트 테스트 테테스트 테테스트 테스트테 테스 테테테 테 테테테
          </div>
          <div class="Button-div">
            <button onClick={onClickStart} className="Button-start">
              <div className="Button-font">테스트 시작하기</div>
            </button>
          </div>
          <div className="Share-it-font">Share it! </div>
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
                  doCopy('복사할 내용');
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
