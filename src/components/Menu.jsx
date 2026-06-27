import { useEffect, useMemo, useRef, useState } from 'react';
import { Flame, Sparkle, Utensils } from 'lucide-react';
import { menuGroups } from '../data/menu.js';
import Reveal from './Reveal.jsx';

export default function MenuSection() {
  const [activeGroup, setActiveGroup] = useState(menuGroups[0].id);
  const tabRefs = useRef({});
  const selected = useMemo(
    () => menuGroups.find((group) => group.id === activeGroup) ?? menuGroups[0],
    [activeGroup],
  );

  useEffect(() => {
    tabRefs.current[activeGroup]?.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    });
  }, [activeGroup]);

  return (
    <section className="section menu-section" id="menu">
      <div className="section-shell">
        <Reveal className="section-heading menu-heading">
          <p className="section-index">02 / Меню</p>
          <h2>Меню как записка другу: бери тёплое и садись рядом.</h2>
          <p>
            Все разделы из меню Лицея: вкладки, плавное появление позиций, цена и
            примерная калорийность без лишних картинок внутри меню.
          </p>
        </Reveal>

        <div className="menu-layout">
          <Reveal className="menu-sidebar" delay={80}>
            <div className="menu-sidebar__top">
              <Utensils aria-hidden="true" size={22} strokeWidth={1.6} />
              <p>Выберите раздел — плашки с позициями появятся мягкой волной.</p>
            </div>

            <div className="menu-tabs" role="tablist" aria-label="Категории меню">
              {menuGroups.map((group) => (
                <button
                  key={group.id}
                  ref={(node) => {
                    tabRefs.current[group.id] = node;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={group.id === activeGroup}
                  onClick={() => setActiveGroup(group.id)}
                >
                  <span>{group.title}</span>
                  <small>{group.items.length}</small>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal className="menu-board" delay={140}>
            <div className="menu-list" role="tabpanel" aria-label={selected.title} key={selected.id}>
              <div className="menu-list__title">
                <Sparkle aria-hidden="true" size={18} />
                <div>
                  <h3>{selected.title}</h3>
                  <p>{selected.note}</p>
                </div>
              </div>

              <div className="menu-card-grid">
                {selected.items.map((item, index) => (
                  <article
                    className="menu-card"
                    key={item.name}
                    style={{ '--menu-card-delay': `${index * 52}ms` }}
                  >
                    <div className="menu-card__head">
                      <h4>{item.name}</h4>
                      <span>{item.tag}</span>
                    </div>
                    <div className="menu-card__meta">
                      <strong>{item.price}</strong>
                      <small>
                        <Flame aria-hidden="true" size={14} strokeWidth={1.8} />
                        ~{item.calories} ккал
                      </small>
                    </div>
                  </article>
                ))}
              </div>

              <div className="menu-calorie-note">
                Калорийность ориентировочная: порции в кафе могут отличаться по весу,
                соусам, молоку и сезонным ингредиентам.
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="menu-afterword" delay={180}>
          <div>
            <span>15 разделов</span>
            <p>От супов и горячего до кофе, выпечки и вечерних закусок.</p>
          </div>
          <div>
            <span>~ ккал</span>
            <p>Быстрый ориентир для выбора, а не медицинская таблица.</p>
          </div>
          <div>
            <span>без фото</span>
            <p>Меню остается быстрым, чистым и похожим на ресторанную карту.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
