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
          <span>Место, где пары заканчиваются,</span>
          <span>а вечер только начинается.</span>
        </h1>

        <p>
          Тёплый студенческий плейс с кофе, едой, разговорами и атмосферой, в
          которой хочется задержаться.
        </p>

        <div className="hero-actions" aria-label="Основные действия">
          <MagneticButton href="#menu">Посмотреть меню</MagneticButton>
          <MagneticButton href="#contacts" variant="ghost">
            Найти нас
          </MagneticButton>
        </div>
      </div>

      <aside className="hero-note" aria-label="Вечерняя атмосфера">
        <span>18:30</span>
        <p>конспект дописан, кофе еще горячий</p>
      </aside>

      <div className="hero-preview" aria-hidden="true">
        <span>атмосфера ниже</span>
      </div>
    </section>
  );
}
