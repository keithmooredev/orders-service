const createOrder = require('../service/order');


describe('getCost', () => {
  test('calculate the cost of an order', () => {
    const items = ['Apple', 'Apple', 'Orange', 'Apple'];
    const order = createOrder(items);
    const cost = order.getCost();
    expect(cost).toEqual(2.05);
  });

  test('calculate the cost of a smaller order', () => {
    const items = ['Apple', 'Orange'];
    const order = createOrder(items);
    const cost = order.getCost();
    expect(cost).toEqual(0.85);
  });

  test('calculate the cost of an empty order', () => {
    const items = [];
    const order = createOrder(items);
    const cost = order.getCost();
    expect(cost).toEqual(0);
  });
});
