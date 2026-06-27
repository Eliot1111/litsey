import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { menuGroups } from '../data/menu.js';
import Reveal from './Reveal.jsx';

export default function MenuSection() {
  const [activeGroup, setActiveGroup] = useState(menuGroups[0].id);
  const tabsRef = useRef(null);
  const activeTabRef = useRef(null);
  const selected = useMemo(
    () => menuGroups.find((group) => group.id === activeGroup) ?? menuGroups[0],
    [activeGroup],
  );

  useEffect(() => {
    activeTabRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [activeGroup]);

  const scrollTabs = (direction) => {
    tabsRef.current?.scrollBy({
      left: direction * 280,
      behavior: 'smooth',
    });
  };

  return (
    <section className="section menu-section" id="menu">
      <div className="section-shell">
        <Reveal className="section-heading menu-heading">
          <p className="section-index">Меню</p>
          <h2>Разделы сверху, позиции внутри — просто и быстро.</h2>
          <p>
            Выберите категорию в верхней ленте. Карточки мягко меняются, а в
            каждой позиции остаются только название и цена.
          </p>
        </Reveal>

        <Reveal className="menu-panel" delay={100}>
          <div className="menu-control-row">
            <div className="menu-current">
              <span>Сейчас открыт раздел</span>
              <h3>{selected.title}</h3>
            </div>

            <div className="menu-arrow-group" aria-label="Перелистать разделы меню">
              <button type="button" aria-label="Предыдущие разделы" onClick={() => scrollTabs(-1)}>
                <ChevronLeft aria-hidden="true" size={20} strokeWidth={1.8} />
              </button>
              <button type="button" aria-label="Следующие разделы" onClick={() => scrollTabs(1)}>
                <ChevronRight aria-hidden="true" size={20} strokeWidth={1.8} />
              </button>
            </div>
          </div>

          <div className="menu-tabs" role="tablist" aria-label="Категории меню" ref={tabsRef}>
            {menuGroups.map((group) => (
              <button
                key={group.id}
                ref={group.id === activeGroup ? activeTabRef : null}
                type="button"
                role="tab"
                aria-selected={group.id === activeGroup}
                onClick={() => setActiveGroup(group.id)}
              >
                <span>{group.title}</span>
              </button>
            ))}
          </div>

          <div className="menu-list" role="tabpanel" aria-label={selected.title} key={selected.id}>
            <div className="menu-list__top">
              <p>{selected.note}</p>
              <span>{selected.items.length} поз.</span>
            </div>

            <div className="menu-card-grid">
              {selected.items.map((item, index) => (
                <article
                  className="menu-card"
                  key={item.name}
                  style={{ '--menu-card-delay': `${index * 42}ms` }}
                >
                  <div>
                    <span className="menu-card__tag">{item.tag}</span>
                    <h4>{item.name}</h4>
                  </div>
                  <strong>{item.price}</strong>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
