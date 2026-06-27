export const cafeAddress = 'Москва, Лялин пер., 8, стр. 2';

export const cafeCoords = {
  lat: 55.757962,
  lon: 37.653495,
};

export const yandexMapEmbed = `https://yandex.ru/map-widget/v1/?ll=${cafeCoords.lon}%2C${cafeCoords.lat}&z=17&pt=${cafeCoords.lon}%2C${cafeCoords.lat}%2Cpm2rdm&l=map`;

export const yandexMapLink = `https://yandex.ru/maps/?pt=${cafeCoords.lon}%2C${cafeCoords.lat}&z=17&l=map`;
