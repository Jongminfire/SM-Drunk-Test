import './WaveEffect.css';
import topwave from '../image/wave-top.png';
import midwave from '../image/wave-mid.png';
import botwave from '../image/wave-bot.png';

function WaveEffect() {
  return (
    <div class="ocean" style={{ pointerEvents: 'none' }}>
      <div class="wave" />
      <div class="wave" />
    </div>
  );
}

export default WaveEffect;
