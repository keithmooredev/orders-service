const createOrder = require('../service/order');


describe('getTotalCost', () => {
  test('calculate the cost of an Apple', () => {
    const items = ['Apple'];
    const order = createOrder(items);
    const cost = order.getTotalCost();
    expect(cost).toEqual(0.60);
  });

  test('calculate the cost of an Orange', () => {
    const items = ['Orange'];
    const order = createOrder(items);
    const cost = order.getTotalCost();
    expect(cost).toEqual(0.25);
  });

  test('calculate the cost of a larger order', () => {
    const items = ['Apple', 'Apple', 'Orange', 'Apple'];
    const order = createOrder(items);
    const cost = order.getTotalCost();
    expect(cost).toEqual(1.45);
  });

  test('calculate the cost of an empty order', () => {
    const items = [];
    const order = createOrder(items);
    const cost = order.getTotalCost();
    expect(cost).toEqual(0);
  });

  test('BOGO offer on apples', () => {
    const items = ['Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Orange'];
    const order = createOrder(items);
    const cost = order.getTotalCost();
    expect(cost).toEqual(2.05);
  });

  test('3-for-the-price-of-2 offer on oranges', () => {
    const items = ['Orange', 'Apple', 'Orange', 'Orange'];
    const order = createOrder(items);
    const cost = order.getTotalCost();
    expect(cost).toEqual(1.1);
  });

  test('3-for-the-price-of-2 offer on oranges (second test)', () => {
    const items = ['Orange', 'Apple', 'Orange', 'Orange', 'Orange'];
    const order = createOrder(items);
    const cost = order.getTotalCost();
    expect(cost).toEqual(1.35);
  });
});
