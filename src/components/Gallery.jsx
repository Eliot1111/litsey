import { galleryImages } from '../data/images.js';
import Reveal from './Reveal.jsx';

export default function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="section-shell">
        <Reveal className="section-heading gallery-heading">
          <p className="section-index">03 / Галерея</p>
          <h2>Живое место, а не просто красивые столы.</h2>
          <p>
            Фасад, свет у окна, слоёная выпечка, чашка капучино и длинный стол,
            за которым легко потерять счет времени.
          </p>
        </Reveal>

        <div className="masonry-gallery">
          {galleryImages.map((image, index) => (
            <Reveal
              as="figure"
              key={`${image.src}-${index}`}
              className={`gallery-item gallery-item--${image.tone}`}
              delay={(index % 6) * 80}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.label}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
