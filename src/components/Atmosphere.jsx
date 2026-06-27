import { imageSet } from '../data/images.js';
import Reveal from './Reveal.jsx';

const atmospherePhotos = [
  {
    image: imageSet.facade,
    className: 'atmosphere-photo--facade',
  },
  {
    image: imageSet.liveTable,
    className: 'atmosphere-photo--table',
  },
  {
    image: imageSet.interiorLight,
    className: 'atmosphere-photo--light',
  },
];

export default function Atmosphere() {
  return (
    <section className="section atmosphere-section" id="about">
      <div className="section-shell atmosphere-grid">
        <Reveal className="section-copy atmosphere-copy">
          <p className="section-index">О нас</p>
          <h2>Светлая пекарня с завтраками, кофе и хорошей едой.</h2>
          <p>
            В Лицее легко зайти на кофе у окна, взять выпечку с собой или
            остаться за столом подольше. В меню есть завтраки, сэндвичи,
            горячие блюда, десерты и напитки без лишней суеты.
          </p>
        </Reveal>

        <div className="atmosphere-collage" aria-label="Фотографии кафе Лицей">
          {atmospherePhotos.map(({ image, className }, index) => (
            <Reveal
              key={image.src}
              className={`photo-frame atmosphere-photo ${className}`}
              delay={index * 120}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
