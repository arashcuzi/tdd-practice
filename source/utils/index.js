export const getMaxProfit = (stockPrices) => {
  if (stockPrices.length < 2) {
    throw new Error('Getting a profit requires at least two values');
  }

  // instantiate vars
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  // loop over array of nums
  for (let i = 1; i < stockPrices.length; i++) {
    let currentPrice = stockPrices[i];

    // check current profit
    let potentialProfit = currentPrice - minPrice;

    // set higher of max or potential
    maxProfit = Math.max(potentialProfit, maxProfit);

    // make sure we have lowest price
    minPrice = Math.min(minPrice, currentPrice);

  }

  return maxProfit;
};
