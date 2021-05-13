import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled, { css } from 'styled-components';
import WaveEffect from '../Functions/WaveEffect';

const Background = styled.div`
  width: 100%;
  height: 100vh;
`;

const Contents = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d4f2f6;
  width: 40%;
  height: 90%;
  border-radius: 15px;
  right: 30%;
  top: 5%;
`;

const WelcomePage = (props) => {
  const { onClickStart } = props;
  return (
    <Background>
      <Contents>
        <div>
          PC 웰컴페이지 입니다.
          <br />
          <button onClick={onClickStart}>테스트 시작하기</button>
        </div>
      </Contents>
      <WaveEffect />
    </Background>
  );
};

export default WelcomePage;
