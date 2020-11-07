#!/usr/bin/env node

const program = require('commander');
const createOrder = require('./service/order');

let progname = process.argv[1].split('/');
progname = progname[progname.length - 1];

program.version('0.1', '-v, --version')
  .option('-o, --order <items...>', 'Your order. E.g., Apple, Orange, Apple.')
  .on('--help', help)
  .on('-h', help)
  .parse(process.argv);

function help() {
  console.log('');
  console.log('  Takes your order.');
  console.log('  Examples:');
  console.log('');
  console.log(`    $ ./${progname} -o Apple, Orange, Apple`);
  console.log('');
}

const args = {
  order: program.order,
};

if (!args.order) {
  help();
  process.exit();
}

function main() {
  try {
    const items = args.order;
    const order = createOrder(items);
    const cost = order.getCost();
    console.log('>>> Cost:', cost);

    console.log('Done.');
    process.exit();
  } catch (err) {
    console.error('---> Error:', err);
    process.exit(127);
  }
}

main();
