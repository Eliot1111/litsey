import {
  Armchair,
  Coffee,
  Laptop,
  MessagesSquare,
  Moon,
  UsersRound,
} from 'lucide-react';
import Reveal from './Reveal.jsx';

const notes = [
  {
    icon: Laptop,
    title: 'Можно с ноутбуком',
    text: 'розетки рядом, столы нормального размера, никто не торопит',
  },
  {
    icon: Moon,
    title: 'Уютно вечером',
    text: 'когда город шумит снаружи, внутри остается теплый свет',
  },
  {
    icon: UsersRound,
    title: 'Прийти компанией',
    text: 'длинный стол, общие блюда и разговоры после пар',
  },
  {
    icon: Coffee,
    title: 'Без лишнего пафоса',
    text: 'кофе и еда выглядят красиво, но место не давит',
  },
  {
    icon: MessagesSquare,
    title: 'Для долгих разговоров',
    text: 'свидания, дедлайны, споры о проектах и планы на лето',
  },
  {
    icon: Armchair,
    title: 'Можно выдохнуть',
    text: 'посидеть спокойно, не объясняя, почему сегодня нужен перерыв',
  },
];

export default function StudentPlace() {
  return (
    <section className="section student-section" id="students">
      <div className="section-shell student-layout">
        <Reveal className="section-copy">
          <p className="section-index">04 / Для студентов</p>
          <h2>Камерное место для своих.</h2>
          <p>
            Лицей держит баланс между «красиво» и «по-человечески»: можно
            заглянуть на двадцать минут, а можно остаться до закрытия с ноутбуком
            и чашкой кофе.
          </p>
        </Reveal>

        <div className="notice-board">
          {notes.map((note, index) => {
            const Icon = note.icon;
            return (
              <Reveal
                as="article"
                key={note.title}
                className="student-note"
                delay={index * 75}
              >
                <Icon aria-hidden="true" size={22} strokeWidth={1.6} />
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
