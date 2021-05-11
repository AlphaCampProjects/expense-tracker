const Record = require('../record');
const db = require('../../config/mongoose');

const data = [
  {
    name: 'lunch',
    category: 'food',
    date: '2021-05-10',
    amount: 150,
  },
  {
    name: 'movie',
    category: 'entertainment',
    date: '2021-05-01',
    amount: 300,
  },
  {
    name: 'train tickets',
    category: 'travel',
    date: '2021-05-02',
    amount: 500,
  },
  {
    name: 'adidas shoes',
    category: 'shopping',
    date: '2021-05-06',
    amount: 5000,
  },
];

db.once('open', () => {
  for (let i = 0; i < data.length; i++) {
    Record.create({
      name: data[i].name,
      category: data[i].category,
      date: data[i].date,
      amount: data[i].amount,
    });
  }
  console.log('Done');
});
