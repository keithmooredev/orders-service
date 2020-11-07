
class Order {
  constructor(items) {
    this.items = parseItems(items);
  }

  getCost() {
    const self = this;
    let total = 0;
    for (let i = 0, len = self.items.length; i < len; i += 1) {
      const item = self.items[i];
      const itemCost = priceBook[item];
      if (itemCost != null) {
        total += itemCost;
      }
    }

    return total;
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
