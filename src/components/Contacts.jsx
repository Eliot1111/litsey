import { Clock3, MapPin, Navigation, Phone } from 'lucide-react';
import MagneticButton from './MagneticButton.jsx';
import Reveal from './Reveal.jsx';

const contactRows = [
  {
    icon: MapPin,
    label: 'Адрес',
    value: 'укажите адрес кафе',
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

          <MagneticButton href="#" variant="primary">
            Открыть на карте
          </MagneticButton>
        </Reveal>

        <Reveal className="map-card" delay={120} aria-label="Карта-заглушка">
          <div className="map-paper">
            <div className="map-line map-line--one" />
            <div className="map-line map-line--two" />
            <div className="map-line map-line--three" />
            <div className="map-pin">
              <Navigation aria-hidden="true" size={24} strokeWidth={1.5} />
              <span>Лицей</span>
            </div>
            <p>Адрес: укажите адрес кафе</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
