
import ClipboardIcon from '../image/ClipboardIcon.png';
import FacebookIcon from '../image/FacebookIcon.png';
import KakaotalkIcon from '../image/KakaotalkIcon.png';


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
  const { Kakao } = window;

  const KakaoSendMessage = () => {
    Kakao.Link.sendCustom({
      templateId: 53526,
      templateArgs: {
        title: '제목',
        description: '설명',
      },
    });
  };

export const ShareIt = (props)=>{
    
return  (
    <div>
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
        </div>)

}