import { logo } from '../data/images.js';

const links = [
  ['О нас', '#about'],
  ['Меню', '#menu'],
  ['Галерея', '#gallery'],
  ['Контакты', '#contacts'],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-layout">
        <a className="footer-logo" href="#top" aria-label="Лицей, на главную">
          <img src={logo} alt="Лицей" />
        </a>

        <p>кофе, выпечка и завтраки в Лялином переулке</p>

        <nav aria-label="Навигация в футере">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <small>© 2026 Лицей. Москва, Лялин переулок, 8, стр. 2.</small>
      </div>
    </footer>
  );
}
