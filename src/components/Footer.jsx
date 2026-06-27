import { logo } from '../data/images.js';

const links = [
  ['Атмосфера', '#atmosphere'],
  ['Меню', '#menu'],
  ['Галерея', '#gallery'],
  ['Для студентов', '#students'],
  ['Контакты', '#contacts'],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-layout">
        <a className="footer-logo" href="#top" aria-label="Лицей, на главную">
          <img src={logo} alt="Лицей" />
        </a>

        <p>кофе, еда и вечера после пар</p>

        <nav aria-label="Навигация в футере">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="social-links" aria-label="Социальные сети">
          <a href="#" aria-label="Telegram">
            tg
          </a>
          <a href="#" aria-label="VK">
            vk
          </a>
          <a href="#" aria-label="Instagram">
            in
          </a>
        </div>

        <small>© 2026 Лицей. Для дедлайнов, свиданий и долгих разговоров.</small>
      </div>
    </footer>
  );
}
