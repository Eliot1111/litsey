import { galleryImages } from '../data/images.js';
import Reveal from './Reveal.jsx';

export default function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="section-shell">
        <Reveal className="section-heading gallery-heading">
          <p className="section-index">Галерея</p>
          <h2>Интерьер, выпечка и детали меню.</h2>
          <p>
            Несколько кадров, которые показывают настроение места без
            повторов и всплывающих подписей.
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
