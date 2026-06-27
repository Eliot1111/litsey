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
    value: 'Ежедневно 09:00–22:00',
  },
  {
    icon: Phone,
    label: 'Телефон',
    value: '+7 (915) 138-68-40',
  },
];

export default function Contacts() {
  return (
    <section className="section contacts-section" id="contacts">
      <div className="section-shell contacts-layout">
        <Reveal className="section-copy contacts-copy">
          <p className="section-index">Контакты</p>
          <h2>Лицей на карте.</h2>
          <p>
            Адрес, часы работы и быстрый переход в карту. Перед визитом
            лучше уточнить наличие столов по телефону.
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
