export function calculatePriceMeuCaninoFeliz(
  numSmallDogs,
  numBigDogs,
  isWeekend
) {
  const priceSmallDogs = numSmallDogs * 20;
  const priceBigDogs = numBigDogs * 40;
  return isWeekend
    ? (priceSmallDogs + priceBigDogs) * 1.2
    : priceSmallDogs + priceBigDogs;
}

export function calculatePriceVaiRex(numSmallDogs, numBigDogs, isWeekend) {
  return isWeekend
    ? numSmallDogs * 20 + numBigDogs * 55
    : numSmallDogs * 15 + numBigDogs * 50;
}

export function calculatePriceChowChawgas(numSmallDogs, numBigDogs) {
  const priceSmallDogs = numSmallDogs * 30;
  const priceBigDogs = numBigDogs * 45;
  return priceSmallDogs + priceBigDogs;
}

export function calculateBestPetShop(selectedDate, numSmallDogs, numBigDogs) {
  const date = new Date(selectedDate);
  const dayOfWeek = date.getDay();
  const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;

  const priceMeuCaninoFeliz = calculatePriceMeuCaninoFeliz(
    numSmallDogs,
    numBigDogs,
    isWeekend
  );
  const priceVaiRex = calculatePriceVaiRex(numSmallDogs, numBigDogs, isWeekend);
  const priceChowChawgas = calculatePriceChowChawgas(numSmallDogs, numBigDogs);

  const minPrice = Math.min(priceMeuCaninoFeliz, priceVaiRex, priceChowChawgas);

  const minPriceShops = [];
  if (priceMeuCaninoFeliz === minPrice) {
    minPriceShops.push({
      name: "Meu Canino Feliz",
      price: priceMeuCaninoFeliz,
      distance: 2,
    });
  }
  if (priceVaiRex === minPrice) {
    minPriceShops.push({ name: "Vai Rex", price: priceVaiRex, distance: 1.7 });
  }
  if (priceChowChawgas === minPrice) {
    minPriceShops.push({
      name: "ChowChawgas",
      price: priceChowChawgas,
      distance: 0.8,
    });
  }

  minPriceShops.sort((a, b) => a.distance - b.distance);
  return minPriceShops[0];
}
