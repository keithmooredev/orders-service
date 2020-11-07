const createOrder = require('../service/order');


describe('getCost', () => {
  test('calculate the cost of an order', () => {
    const items = ['Apple', 'Apple', 'Orange', 'Apple'];
    const order = createOrder(items);
    const cost = order.getCost();
    expect(cost).toEqual(2.05);
  });
});
