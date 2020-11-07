
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
    let apples = this.getCount('Apple');
    let oranges = this.getCount('Orange');

    const appleDiscount = apples > 0 ? Math.round(apples / 2.0) : 0;
    const orangeThrees = oranges > 0 ? Math.trunc(oranges / 3.0) : 0;
    const orangeRemander = oranges > 0 ? oranges % 3.0 : 0;

    const appleCost = appleDiscount * appleUnitCost;
    const orangeCost = (orangeThrees * 2 * orangeUnitCost) + (orangeRemander * orangeUnitCost);
    return appleCost + orangeCost;
  }
}

const priceBook = {
  'Apple': 0.60,
  'Orange': 0.25,
};

function parseItems(items) {
  return items.map((el) => el.replace(',', ''));
}

function createOrder(items) {
  return new Order(items);
}

module.exports = createOrder;
