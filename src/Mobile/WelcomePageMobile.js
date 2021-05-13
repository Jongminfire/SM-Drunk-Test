import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled, { css } from 'styled-components';
import WaveEffect from '../Functions/WaveEffect';
import '../Pages/WelcomePage.css';

import KakaotalkIcon from '../image/KakaotalkIcon.png';
import FacebookIcon from '../image/FacebookIcon.png';
import InstagramIcon from '../image/InstagramIcon.png';

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

const WelcomePageMobile = (props) => {
  const { onClickStart } = props;
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
                onClick={onClickStart}
                className="Button-share"
                style={{
                  backgroundImage: `url(${KakaotalkIcon})`,
                  backgroundSize: 'contain',
                }}
              ></button>
            </div>
            <div>
              <button
                onClick={onClickStart}
                className="Button-share"
                style={{
                  backgroundImage: `url(${FacebookIcon})`,
                  backgroundSize: 'contain',
                }}
              ></button>
            </div>
            <div>
              <button
                onClick={onClickStart}
                className="Button-share"
                style={{
                  backgroundImage: `url(${InstagramIcon})`,
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
