import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled, { css } from 'styled-components';
import lroabats from '../Datasets/amount_of_drinking/low_risk_of_alcohol_by_alcohol_type_samsungSeoulHospital.json';
import bdrk from '../Datasets/amount_of_drinking/binge_drinking_rate_kIndicator.json';
import wdacss from '../Datasets/amount_of_drinking/who_daily_alcohol_consumption_standards_samsungSeoulHospital.json';
import ebds from '../Datasets/empty_bottle_deposit/empty_bottle_deposit_statMe.json';
import '../Pages/WelcomePage.scss';
import html2canvas from 'html2canvas';

import ClipboardIcon from '../image/downloadIcon.png';
import FacebookIcon from '../image/FacebookIcon.png';
import KakaotalkIcon from '../image/KakaotalkIcon.png';

function KakaoSendMessage(link) {
  console.log(link);
  Kakao.Link.uploadImage({
    file: link,
  }).then(function (res) {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'TMI',
        description: 'POP-up Modal',
        imageUrl: res.infos.original.url,
        link: {
          mobileWebUrl: res.infos.original.url,
          androidExecParams: 'test',
        },
      },
    });
  });
}

function ShareToFacebook(link) {
  console.log(link);
  Kakao.Link.uploadImage({
    file: link,
  }).then(function (res) {
    console.log(res.infos.original.url);
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' + res.infos.original.url
    );
  });
}

function HtmlToCanvas() {
  html2canvas(document.getElementById('Test-Result')).then(function (canvas) {
    var myImage = canvas.toDataURL();
    KakaoSendMessage([blobToFile(dataURItoBlob(myImage), 'image')]);
  });
}

function onClickFacebook() {
  html2canvas(document.getElementById('Test-Result')).then(function (canvas) {
    var myImage = canvas.toDataURL();
    ShareToFacebook([blobToFile(dataURItoBlob(myImage), 'image')]);
  });
}

const HtmlToCanvasDownload = () => {
  html2canvas(document.getElementById('Test-Result')).then(function (canvas) {
    var myImage = canvas.toDataURL();
    downloadURI(myImage, 'testout.png');
  });
};
function downloadURI(uri, name) {
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
}

function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1]);
  else byteString = unescape(dataURI.split(',')[1]);
  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], { type: mimeString });
}

function blobToFile(theBlob, fileName) {
  return new File([theBlob], fileName, {
    lastModified: new Date().getTime(),
    type: theBlob.type,
  });
}

const Background = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const ButtonForm = styled.button`
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  height: 6vh;
  min-width: 10vw;
  font-size: 1.2rem;
  cursor: pointer;
  color: #126e82;
  margin: 0.5vh 0 0.5vh 1.5vw;

  &:hover {
    transform: scale(1.1, 1.1);
    transition: all ease-in-out 0.2s;
  }

  &:active {
    transform: scale(0.85, 0.85);
    transition: all ease-in-out 0.1s;
  }
`;

const Contents = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #d4f2f6;
  opacity: 0.75;
  width: 90%;
  height: 95%;
  border-radius: 10px;
  right: 5%;
  top: 10%;
`;

const Title = styled.div`
  font-size: 3em;
  text-align: center;
  margin-top: 2vh;
  font-weight: bold;
  color: #126e82;
  font-family: 'IBMPlexSansKR';
  font-weight: bold;
`;

const ResultPage = (props) => {
  const { qnaData, score, onClickRestart } = props;
  const name = localStorage.getItem('userName');
  const weight = localStorage.getItem('userWeight');
  const gen = localStorage.getItem('gender');
  const alcoholAmount = (weight * 0.1 * 24) / 2 / 6.76;
  const sojuBottle = Math.round(Math.round(alcoholAmount) / 7);
  const sojuGlass = Math.round(alcoholAmount) % 7;

  const bCount = localStorage.getItem('bottleCount');
  const type = localStorage.getItem('drinkType');
  let calType;
  if (type === '소주') calType = lroabats[7]['알코올 함량(g)'];
  else if (type === '맥주') calType = lroabats[0]['알코올 함량(g)'];
  else if (type === '양주') calType = lroabats[9]['알코올 함량(g)'];
  else if (type === '막걸리') calType = lroabats[3]['알코올 함량(g)'];
  else if (type === '와인') calType = lroabats[4]['알코올 함량(g)'];
  const alcoholConsumption = calType * bCount;

  let overdoseStatement;
  if (alcoholConsumption >= 56) {
    if (gen === '남성')
      overdoseStatement = `${name}님은 월 1회 이상 한 번의 술자리에서 폭음을 한 남성 ${bdrk[1]['2019']}%에 포함됩니다!`;
    else if (gen === '여성')
      overdoseStatement = `${name}님은 월 1회 이상 한 번의 술자리에서 폭음을 한 여성 ${bdrk[8]['2019']}%에 포함됩니다!`;
  } else {
    if (gen === '남성')
      overdoseStatement = `${name}님은 월 1회 이상 한 번의 술자리에서 폭음을 하지 않은 남성 ${
        100 - bdrk[1]['2019']
      }%에 포함됩니다!`;
    else if (gen === '여성')
      overdoseStatement = `${name}님은 월 1회 이상 한 번의 술자리에서 폭음을 하지 않은 여성 ${
        100 - bdrk[8]['2019']
      }%에 포함됩니다!`;
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

  const sojuBottleDeposit =
    Math.floor(alcoholConsumption / (6.76 * 7)) * ebds[0]['개당 가격(원)'];

  const addictedState = () => {
    if (score < 9) {
      return <div>당신은 정상음주자 입니다. 축하드려요 🎉</div>;
    } else if (score < 12) {
      return (
        <div>
          <span style={{ color: '#E02828' }}>당신은 위험음주자 입니다.</span>
          <div style={{ marginTop: '2vh' }}>
            <p>
              아직까지 특별히 심각한 음주로 인한 문제가 발생하지는 않았지만 향후
              음주로 인한 문제가 발생할 가능성이 있습니다.
            </p>
            <p>
              음주량을 줄일거나 음주횟수를 줄여 적정음주 실행하는 것이 좋겠어요
            </p>
          </div>
        </div>
      );
    } else if (score < 20) {
      return (
        <div>
          <span style={{ color: '#E02828' }}>당신은 고위험음주자 입니다.</span>
          <div style={{ marginTop: '2vh' }}>
            <p>
              이미 신체적인 정신건강 이상이나 행동상의 문제가 나타는 수준입니다.
            </p>
            <p>속히 전문의 진찰을 받는 것이 좋겠어요</p>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: '3rem' }}>
          <span
            style={{ color: '#E02828', fontSize: '1.5rem', fontWeight: 'bold' }}
          >
            당신은 알코올사용장애환자 입니다.
          </span>
          <div style={{ marginTop: '2vh' }}>
            <p>
              이미 알코올 사용장애, 특히 알코올 의존 상태임이 강력히 시사됩니다.
            </p>
            <p>
              속히 전문의의 진찰을 받고 전문화된 치료를 시작하는 것이 좋겠어요
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <Background>
      <Contents id="Test-Result">
        <Title>{name}님의 검사결과입니다.</Title>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div
            style={{
              paddingLeft: '5rem',
              paddingRight: '4rem',
              marginTop: '1vh',
            }}
          >
            <div
              style={{
                borderTop: '1.3rem solid rgba(69, 146, 179,0.3)',
                padding: '0 1vw 1vh 1vw',
                backgroundColor: '#f4f4f4',
                marginBottom: '3rem',
              }}
            >
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  paddingTop: '1vh',
                }}
              >
                {name}님의 권장 음주량은 소주 {sojuBottle}병 {sojuGlass}잔
                입니다!
              </div>
              <div style={{ marginTop: '1vh' }}>
                ※ 개인 체질을 배제하고 체중만을 고려한 값 입니다.
              </div>
            </div>
            <div
              style={{
                borderTop: '1.3rem solid rgba(69, 146, 179,0.3)',
                padding: '0 1vw 1vh 1vw',
                backgroundColor: '#f4f4f4',
                marginBottom: '3rem',
              }}
            >
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  paddingTop: '1vh',
                }}
              >
                {overdoseStatement}
              </div>
              <div style={{ marginTop: '1vh' }}>
                ※2019년을 기준으로 한 값 입니다.
              </div>
            </div>
            <div
              style={{
                borderTop: '1.3rem solid rgba(69, 146, 179,0.3)',
                padding: '0 1vw 1vh 1vw',
                backgroundColor: '#f4f4f4',
                marginBottom: '3rem',
              }}
            >
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  paddingTop: '1vh',
                }}
              >
                {name}님은 성인{gen} WHO 알코올 섭취 기준 대비 {whoStatement}에
                속합니다!
              </div>
            </div>
            <div
              style={{
                borderTop: '1.3rem solid rgba(69, 146, 179,0.3)',
                padding: '0 1vw 1vh 1vw',
                backgroundColor: '#f4f4f4',
                marginBottom: '3rem',
              }}
            >
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  paddingTop: '1vh',
                }}
              >
                평소에 마신 술의 양이라면 소주병 기준{' '}
                <span style={{ color: '#E02828' }}>{sojuBottleDeposit}</span>
                원을 보증금으로 돌려받을 수 있습니다!
              </div>
            </div>
          </div>
          <div style={{ paddingRight: '5rem', marginTop: '2vh' }}>
            <div
              style={{
                borderTop: '1.3rem solid rgba(69, 146, 179,0.3)',
                padding: '0 1vw 1vh 1vw',
                backgroundColor: '#f4f4f4',
                marginBottom: '3rem',
              }}
            >
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  paddingTop: '1vh',
                }}
              >
                {name}님의 알콜 중독 테스트 점수는 {score}점 입니다.
              </div>
            </div>
            <div
              style={{
                borderTop: '1.3rem solid rgba(69, 146, 179,0.3)',
                padding: '0 1vw 1vh 1vw',
                backgroundColor: '#f4f4f4',
                marginBottom: '3rem',
              }}
            >
              {addictedState()}
            </div>
            <div class="Button-share-div">
              <div>
                <button
                  onClick={() => {
                    HtmlToCanvas();
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
                    HtmlToCanvasDownload();
                  }}
                  className="Button-share"
                  style={{
                    backgroundImage: `url(${ClipboardIcon})`,
                    backgroundSize: 'contain',
                  }}
                ></button>
              </div>
            </div>
            <div
              style={{ position: 'absolute', right: '5rem', bottom: '3rem' }}
            >
              <ButtonForm onClick={() => onClickRestart()}>
                메인으로 돌아가기
              </ButtonForm>
            </div>
          </div>
        </div>
      </Contents>
    </Background>
  );
};

export default ResultPage;
