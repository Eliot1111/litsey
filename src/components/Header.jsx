import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { logo } from '../data/images.js';
import MagneticButton from './MagneticButton.jsx';

const navItems = [
  ['Атмосфера', '#atmosphere'],
  ['Меню', '#menu'],
  ['Галерея', '#gallery'],
  ['Для студентов', '#students'],
  ['Контакты', '#contacts'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" data-menu-open={menuOpen}>
      <a className="brand-mark" href="#top" aria-label="Лицей, на главную" onClick={closeMenu}>
        <img src={logo} alt="Лицей" />
      </a>

      <nav className="desktop-nav" aria-label="Главная навигация">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <MagneticButton href="#contacts" className="header-cta">
          Зайти вечером
        </MagneticButton>
        <button
          className="burger-button"
          type="button"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      <div className="mobile-menu" aria-hidden={!menuOpen}>
        <div className="mobile-menu__inner">
          {navItems.map(([label, href], index) => (
            <a
              key={href}
              href={href}
              style={{ '--item-index': index }}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <MagneticButton href="#contacts" variant="cream" onClick={closeMenu}>
            Зайти вечером
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
