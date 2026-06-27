import { Clock3, MapPin, Phone } from 'lucide-react';
import { cafeAddress, yandexMapEmbed, yandexMapLink } from '../data/contacts.js';
import MagneticButton from './MagneticButton.jsx';
import Reveal from './Reveal.jsx';

const contactRows = [
  {
    icon: MapPin,
    label: 'Адрес',
    value: cafeAddress,
  },
  {
    icon: Clock3,
    label: 'Часы',
    value: 'Пн-Вс 09:00-23:00',
  },
  {
    icon: Phone,
    label: 'Телефон',
    value: '+7 (000) 000-00-00',
  },
];

export default function Contacts() {
  return (
    <section className="section contacts-section" id="contacts">
      <div className="section-shell contacts-layout">
        <Reveal className="section-copy contacts-copy">
          <p className="section-index">06 / Контакты</p>
          <h2>Вечер начинается здесь.</h2>
          <p>
            Сохраните Лицей как точку после пар: кофе, еда и стол, за которым
            можно спокойно договорить день.
          </p>

          <div className="contacts-list" aria-label="Контактная информация">
            {contactRows.map((row) => {
              const Icon = row.icon;
              return (
                <div className="contact-row" key={row.label}>
                  <Icon aria-hidden="true" size={20} strokeWidth={1.6} />
                  <div>
                    <span>{row.label}</span>
                    <strong>{row.value}</strong>
                  </div>
                </div>
              );
            })}
          </div>

          <MagneticButton href={yandexMapLink} variant="primary" target="_blank" rel="noreferrer">
            Открыть на карте
          </MagneticButton>
        </Reveal>

        <Reveal className="map-card" delay={120} aria-label="Карта кафе Лицей">
          <div className="map-frame">
            <iframe
              title="Кафе Лицей на карте Москвы"
              src={yandexMapEmbed}
              loading="lazy"
              allowFullScreen
            />
            <div className="map-overlay">
              <span>Лицей</span>
              <p>{cafeAddress}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
