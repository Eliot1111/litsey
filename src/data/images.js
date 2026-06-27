const photo = (fileName) => new URL(`../../photos/${fileName}`, import.meta.url).href;
const asset = (fileName) => new URL(`../assets/${fileName}`, import.meta.url).href;

export const logoSource = photo('logo.png');
export const logo = asset('logo-clean.png');

export const imageSet = {
  facade: {
    src: photo('XXXL.webp'),
    alt: 'Фасад кафе Лицей с красным логотипом у окна',
    label: 'фасад на вечерней улице',
    tone: 'brand',
  },
  heroInterior: {
    src: photo('Screenshot 2026-06-27 at 00.26.09.png'),
    alt: 'Светлый интерьер кафе с длинным столом и мягкими стульями',
    label: 'длинный стол для разговоров',
    tone: 'interior',
  },
  interiorWide: {
    src: photo('Screenshot 2026-06-27 at 00.25.57.png'),
    alt: 'Интерьер кафе с круглыми столами и постерами на стене',
    label: 'столы у больших окон',
    tone: 'interior',
  },
  interiorLight: {
    src: photo('Screenshot 2026-06-27 at 00.26.00.png'),
    alt: 'Интерьер кафе с мягким дневным светом и дизайнерскими светильниками',
    label: 'мягкий свет у окна',
    tone: 'interior',
  },
  interiorHall: {
    src: photo('Screenshot 2026-06-27 at 00.26.03.png'),
    alt: 'Общий зал кафе с красными акцентами и посадкой для компаний',
    label: 'зал для компаний',
    tone: 'interior',
  },
  interiorArches: {
    src: photo('Screenshot 2026-06-27 at 00.26.06.png'),
    alt: 'Зал кафе с арочными нишами и большим общим столом',
    label: 'общий стол и арки',
    tone: 'interior',
  },
  liveTable: {
    src: photo('Screenshot 2026-06-27 at 00.25.43.png'),
    alt: 'Живой стол в кафе с цветами, ноутбуком и гостями',
    label: 'ноутбук, чай и разговоры',
    tone: 'people',
  },
  pastryBerries: {
    src: photo('Screenshot 2026-06-27 at 00.22.28.png'),
    alt: 'Слойки с клубникой на теплом деревянном фоне',
    label: 'ягодная слойка',
    tone: 'dessert',
  },
  goldenCoffee: {
    src: photo('Screenshot 2026-06-27 at 00.22.50.png'),
    alt: 'Кофейный напиток в стакане с золотистым декором',
    label: 'раф после дедлайна',
    tone: 'drink',
  },
  sandwichBeef: {
    src: photo('Screenshot 2026-06-27 at 00.24.01.png'),
    alt: 'Сэндвич в руке на светлом фоне',
    label: 'сэндвич на ходу',
    tone: 'food',
  },
  sandwichChicken: {
    src: photo('Screenshot 2026-06-27 at 00.24.15.png'),
    alt: 'Сэндвич с курицей, миксом салата и горчичным соусом',
    label: 'курица и горчичный соус',
    tone: 'food',
  },
  sandwichTuna: {
    src: photo('Screenshot 2026-06-27 at 00.24.25.png'),
    alt: 'Сэндвич с тунцом, маринованным луком и яичным салатом',
    label: 'тунец и маринованный лук',
    tone: 'food',
  },
  hotCroissant: {
    src: photo('Screenshot 2026-06-27 at 00.25.10.png'),
    alt: 'Горячая выпечка с сосиской на тарелке с красной линией',
    label: 'горячее после пары',
    tone: 'food',
  },
  layeredPie: {
    src: photo('Screenshot 2026-06-27 at 00.25.14.png'),
    alt: 'Слоеная выпечка с ветчиной и сыром',
    label: 'слоеный завтрак',
    tone: 'food',
  },
  honeyCake: {
    src: photo('Screenshot 2026-06-27 at 00.25.18.png'),
    alt: 'Кусок медового торта на белой тарелке',
    label: 'медовик к вечеру',
    tone: 'dessert',
  },
  plainCroissant: {
    src: photo('Screenshot 2026-06-27 at 00.25.23.png'),
    alt: 'Круассан на белой тарелке',
    label: 'круассан первой пары',
    tone: 'dessert',
  },
  berryRoll: {
    src: photo('Screenshot 2026-06-27 at 00.25.26.png'),
    alt: 'Слоеная выпечка с кремом и ягодной начинкой',
    label: 'ягодный слой',
    tone: 'dessert',
  },
  cappuccino: {
    src: photo('Screenshot 2026-06-27 at 00.25.35.png'),
    alt: 'Капучино с латте-артом в белой чашке',
    label: 'капучино, который спасает вечер',
    tone: 'drink',
  },
  handBite: {
    src: photo('Screenshot 2026-06-27 at 00.21.46.png'),
    alt: 'Надкушенная теплая слойка в руке на темном фоне',
    label: 'кусочек на выдохе',
    tone: 'food',
  },
};

export const galleryImages = [
  imageSet.facade,
  imageSet.interiorWide,
  imageSet.pastryBerries,
  imageSet.goldenCoffee,
  imageSet.liveTable,
  imageSet.sandwichChicken,
  imageSet.interiorLight,
  imageSet.hotCroissant,
  imageSet.honeyCake,
  imageSet.interiorHall,
  imageSet.berryRoll,
  imageSet.cappuccino,
  imageSet.sandwichTuna,
  imageSet.layeredPie,
  imageSet.interiorArches,
  imageSet.plainCroissant,
  imageSet.handBite,
  imageSet.sandwichBeef,
];
