import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled, { css } from 'styled-components';
import WaveEffect from '../Functions/WaveEffect';
import './WelcomePage.css';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  display: flex;
  top: 5%;
  min-width: 300px;
  max-width: 500px;
  width: 50vw;
  height: 100vh;
  background-color: #d4f2f6;
  margin-top: 5vh;
  border-radius: 10px 10px 0px 0px;
  opacity: 0.75;
  padding-left: 5vw;
  padding-right: 5vw;
`;

const WelcomePage = (props) => {
  const { onClickStart } = props;
  return (
    <Background>
      <Contents>
        <div>
          <div className="Title-font">음주가無</div>
          <div className="Main-font">
            Lorem ipsum dolor sot ametaaaaa, consectetur adipiscing elit ut
            aliqualm
          </div>
          <div class="Button-div">
            <button onClick={onClickStart} className="Button-start">
              테스트 시작하기
            </button>
          </div>
          <div className="Share-it-font">Share it! </div>
          <div class="Button-share-div">
            <div>
              <button onClick={onClickStart} className="Button-share"></button>
            </div>
            <div>
              <button onClick={onClickStart} className="Button-share"></button>
            </div>
            <div>
              <button onClick={onClickStart} className="Button-share"></button>
            </div>
          </div>
        </div>
      </Contents>
      <WaveEffect />
    </Background>
  );
};

export default WelcomePage;
