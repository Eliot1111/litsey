import { imageSet } from '../data/images.js';
import Reveal from './Reveal.jsx';

const atmospherePhotos = [
  {
    image: imageSet.facade,
    className: 'atmosphere-photo--facade',
    caption: 'узнать место с улицы',
  },
  {
    image: imageSet.liveTable,
    className: 'atmosphere-photo--table',
    caption: 'дописать конспект',
  },
  {
    image: imageSet.interiorLight,
    className: 'atmosphere-photo--light',
    caption: 'остаться до вечера',
  },
];

export default function Atmosphere() {
  return (
    <section className="section atmosphere-section" id="atmosphere">
      <div className="section-shell atmosphere-grid">
        <Reveal className="section-copy atmosphere-copy">
          <p className="section-index">01 / Атмосфера</p>
          <h2>Посидеть, выдохнуть, поговорить.</h2>
          <p>
            Мы сделали место для тех вечеров, когда не хочется сразу ехать домой
            после пар. Здесь можно дописать конспект, встретиться с друзьями,
            выпить кофе, съесть что-то тёплое и просто спокойно подышать.
          </p>
        </Reveal>

        <div className="atmosphere-collage" aria-label="Фотографии атмосферы кафе">
          {atmospherePhotos.map(({ image, className, caption }, index) => (
            <Reveal
              key={image.src}
              className={`photo-frame atmosphere-photo ${className}`}
              delay={index * 120}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span>{caption}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
