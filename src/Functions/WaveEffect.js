import './WaveEffect.css';
import topwave from '../image/wave-top.png';
import midwave from '../image/wave-mid.png';
import botwave from '../image/wave-bot.png';

function WaveEffect() {
  return (
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div
          class="wave waveTop"
          style={{ backgroundImage: `url(${topwave})`, opacity: 0.5 }}
        ></div>
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div
          class="wave waveMiddle"
          style={{ backgroundImage: `url(${midwave})`, opacity: 0.5 }}
        ></div>
      </div>
      <div class="waveWrapperInner bgBottom">
        <div
          class="wave waveBottom"
          style={{ backgroundImage: `url(${botwave})`, opacity: 0.5 }}
        ></div>
      </div>
    </div>
  );
}

export default WaveEffect;
