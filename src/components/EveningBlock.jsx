import { imageSet } from '../data/images.js';
import MagneticButton from './MagneticButton.jsx';
import Reveal from './Reveal.jsx';

export default function EveningBlock() {
  return (
    <section className="evening-section">
      <div className="evening-media" aria-hidden="true">
        <img src={imageSet.liveTable.src} alt="" loading="lazy" />
      </div>
      <div className="evening-glow" aria-hidden="true" />
      <Reveal className="evening-content">
        <p className="section-index">05 / Вечер</p>
        <h2>После пар здесь становится особенно хорошо.</h2>
        <p>
          Тёплый свет, шум разговоров, кофе на столе и ощущение, что день
          наконец замедлился.
        </p>
        <MagneticButton href="#contacts" variant="cream">
          Зайти вечером
        </MagneticButton>
      </Reveal>
    </section>
  );
}
