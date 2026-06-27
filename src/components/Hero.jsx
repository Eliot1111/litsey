import { useEffect, useRef } from 'react';
import { imageSet, logo } from '../data/images.js';
import MagneticButton from './MagneticButton.jsx';

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const node = sectionRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / rect.height));
      node.style.setProperty('--hero-shift', `${progress * 54}px`);
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hero-section" id="top" ref={sectionRef}>
      <div className="hero-media" aria-hidden="true">
        <img src={imageSet.heroInterior.src} alt="" />
      </div>
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-logo-lockup" aria-hidden="true">
          <img src={logo} alt="" />
        </div>

        <h1>
          <span>Лицей</span>
        </h1>

        <p>
          Кафе и пекарня в Лялином переулке: завтраки, горячая выпечка,
          кофе, спокойный свет и меню на каждый день.
        </p>

        <div className="hero-actions" aria-label="Основные действия">
          <MagneticButton href="#menu">Посмотреть меню</MagneticButton>
          <MagneticButton href="#contacts" variant="ghost">
            Найти нас
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
