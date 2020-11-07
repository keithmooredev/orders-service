const priceBook = {
  'Apple': 0.60,
  'Orange': 0.25,
};

class Order {
  constructor(items) {
    this.items = parseItems(items);
  }

  getCount(item) {
    return this.items.filter((el) => el === item).length;
  }

  getUnitCost(item) {
    return priceBook[item];
  }

  getTotalCost() {
    // const self = this;
    // let total = 0;
    // for (let i = 0, len = self.items.length; i < len; i += 1) {
    //   const item = self.items[i];
    //   const itemCost = priceBook[item];
    //   if (itemCost != null) {
    //     total += itemCost;
    //   }
    // }
    // return total;

    const appleUnitCost = this.getUnitCost('Apple');
    const orangeUnitCost = this.getUnitCost('Orange');
    const apples = this.getCount('Apple');
    const oranges = this.getCount('Orange');

    // Apply special offer on apples: buy one get one free
    const appleDiscount = Math.round(apples / 2.0);
    const appleCost = appleDiscount * appleUnitCost;

    // Apply special offer on oranges: 3 for the price of two
    const orangeThrees = Math.trunc(oranges / 3.0);
    const orangeRemander = oranges % 3.0;
    const orangeCost = (orangeThrees * 2 * orangeUnitCost) + (orangeRemander * orangeUnitCost);

    return appleCost + orangeCost;
  }
}

function parseItems(items) {
  return items.map((el) => el.replace(',', ''));
}

function createOrder(items) {
  return new Order(items);
}

module.exports = createOrder;
