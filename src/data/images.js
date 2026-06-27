const logoClean = new URL('../assets/logo-clean.png', import.meta.url).href;

const photos = {
  facade: new URL('../../photos/XXXL.webp', import.meta.url).href,
  heroInterior: new URL('../../photos/Screenshot 2026-06-27 at 00.26.09.png', import.meta.url).href,
  interiorWide: new URL('../../photos/Screenshot 2026-06-27 at 00.25.57.png', import.meta.url).href,
  interiorLight: new URL('../../photos/Screenshot 2026-06-27 at 00.26.00.png', import.meta.url).href,
  interiorHall: new URL('../../photos/Screenshot 2026-06-27 at 00.26.03.png', import.meta.url).href,
  interiorArches: new URL('../../photos/Screenshot 2026-06-27 at 00.26.06.png', import.meta.url).href,
  liveTable: new URL('../../photos/Screenshot 2026-06-27 at 00.25.43.png', import.meta.url).href,
  pastryBerries: new URL('../../photos/Screenshot 2026-06-27 at 00.22.28.png', import.meta.url).href,
  goldenCoffee: new URL('../../photos/Screenshot 2026-06-27 at 00.22.50.png', import.meta.url).href,
  sandwichBeef: new URL('../../photos/Screenshot 2026-06-27 at 00.24.01.png', import.meta.url).href,
  hotCroissant: new URL('../../photos/Screenshot 2026-06-27 at 00.25.10.png', import.meta.url).href,
  layeredPie: new URL('../../photos/Screenshot 2026-06-27 at 00.25.14.png', import.meta.url).href,
  honeyCake: new URL('../../photos/Screenshot 2026-06-27 at 00.25.18.png', import.meta.url).href,
  plainCroissant: new URL('../../photos/Screenshot 2026-06-27 at 00.25.23.png', import.meta.url).href,
  berryRoll: new URL('../../photos/Screenshot 2026-06-27 at 00.25.26.png', import.meta.url).href,
  cappuccino: new URL('../../photos/Screenshot 2026-06-27 at 00.25.35.png', import.meta.url).href,
  handBite: new URL('../../photos/Screenshot 2026-06-27 at 00.21.46.png', import.meta.url).href,
};

export const logo = logoClean;

export const imageSet = {
  facade: {
    src: photos.facade,
    alt: 'Фасад кафе Лицей с красным логотипом у окна',
    label: 'фасад',
    tone: 'brand',
  },
  heroInterior: {
    src: photos.heroInterior,
    alt: 'Светлый интерьер кафе с длинным столом и мягкими стульями',
    label: 'длинный стол для разговоров',
    tone: 'interior',
  },
  interiorWide: {
    src: photos.interiorWide,
    alt: 'Интерьер кафе с круглыми столами и постерами на стене',
    label: 'столы у больших окон',
    tone: 'interior',
  },
  interiorLight: {
    src: photos.interiorLight,
    alt: 'Интерьер кафе с мягким дневным светом и дизайнерскими светильниками',
    label: 'мягкий свет у окна',
    tone: 'interior',
  },
  interiorHall: {
    src: photos.interiorHall,
    alt: 'Общий зал кафе с красными акцентами и посадкой для компаний',
    label: 'зал для компаний',
    tone: 'interior',
  },
  interiorArches: {
    src: photos.interiorArches,
    alt: 'Зал кафе с арочными нишами и большим общим столом',
    label: 'общий стол и арки',
    tone: 'interior',
  },
  liveTable: {
    src: photos.liveTable,
    alt: 'Живой стол в кафе с цветами, ноутбуком и гостями',
    label: 'стол у окна',
    tone: 'people',
  },
  pastryBerries: {
    src: photos.pastryBerries,
    alt: 'Слойки с клубникой на теплом деревянном фоне',
    label: 'ягодная слойка',
    tone: 'dessert',
  },
  goldenCoffee: {
    src: photos.goldenCoffee,
    alt: 'Кофейный напиток в стакане с золотистым декором',
    label: 'кофейный напиток',
    tone: 'drink',
  },
  sandwichBeef: {
    src: photos.sandwichBeef,
    alt: 'Сэндвич в руке на светлом фоне',
    label: 'сэндвич',
    tone: 'food',
  },
  hotCroissant: {
    src: photos.hotCroissant,
    alt: 'Горячая выпечка с сосиской на тарелке с красной линией',
    label: 'горячая выпечка',
    tone: 'food',
  },
  layeredPie: {
    src: photos.layeredPie,
    alt: 'Слоеная выпечка с ветчиной и сыром',
    label: 'слоеная выпечка',
    tone: 'food',
  },
  honeyCake: {
    src: photos.honeyCake,
    alt: 'Кусок медового торта на белой тарелке',
    label: 'медовый торт',
    tone: 'dessert',
  },
  plainCroissant: {
    src: photos.plainCroissant,
    alt: 'Круассан на белой тарелке',
    label: 'круассан',
    tone: 'dessert',
  },
  berryRoll: {
    src: photos.berryRoll,
    alt: 'Слоеная выпечка с кремом и ягодной начинкой',
    label: 'ягодный слой',
    tone: 'dessert',
  },
  cappuccino: {
    src: photos.cappuccino,
    alt: 'Капучино с латте-артом в белой чашке',
    label: 'капучино',
    tone: 'drink',
  },
  handBite: {
    src: photos.handBite,
    alt: 'Надкушенная теплая слойка в руке на темном фоне',
    label: 'выпечка',
    tone: 'food',
  },
};

export const galleryImages = [
  imageSet.interiorWide,
  imageSet.pastryBerries,
  imageSet.goldenCoffee,
  imageSet.hotCroissant,
  imageSet.honeyCake,
  imageSet.interiorHall,
  imageSet.berryRoll,
  imageSet.cappuccino,
  imageSet.layeredPie,
  imageSet.interiorArches,
  imageSet.plainCroissant,
  imageSet.handBite,
  imageSet.sandwichBeef,
];
