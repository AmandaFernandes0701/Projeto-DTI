import {
  calculatePriceMeuCaninoFeliz,
  calculatePriceVaiRex,
  calculatePriceChowChawgas,
  calculateBestPetShop,
} from '../functions/calculatePrices';

describe('calculatePriceMeuCaninoFeliz', () => {
  test('calculates price correctly on a weekday', () => {
    const price = calculatePriceMeuCaninoFeliz(2, 3, false);
    expect(price).toBe(160);
  });

  test('calculates price correctly on a weekend', () => {
    const price = calculatePriceMeuCaninoFeliz(2, 3, true);
    expect(price).toBe(192);
  });
});

describe('calculatePriceVaiRex', () => {
  test('calculates price correctly on a weekday', () => {
    const price = calculatePriceVaiRex(2, 3, false);
    expect(price).toBe(180);
  });

  test('calculates price correctly on a weekend', () => {
    const price = calculatePriceVaiRex(2, 3, true);
    expect(price).toBe(205);
  });
});

describe('calculatePriceChowChawgas', () => {
  test('calculates price correctly', () => {
    const price = calculatePriceChowChawgas(2, 3);
    expect(price).toBe(195);
  });
});

describe('calculateBestPetShop', () => {
  test('chooses the best pet shop correctly', () => {
    const bestShop = calculateBestPetShop('2023-10-25', 2, 3);
    expect(bestShop.name).toBe('Meu Canino Feliz');
    expect(bestShop.price).toBe(160);
  });
});
