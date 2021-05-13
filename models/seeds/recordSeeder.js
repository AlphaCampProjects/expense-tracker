const Record = require('../record');
const db = require('../../config/mongoose');

const data = [
  {
    name: '午餐吃pizza',
    category: '飲食',
    date: '2021-05-10',
    amount: 150,
    icon: 'fas fa-utensils',
  },
  {
    name: '電影票',
    category: '休閒娛樂',
    date: '2021-05-01',
    amount: 300,
    icon: 'fas fa-grin-beam',
  },
  {
    name: '火車票',
    category: '交通',
    date: '2021-05-02',
    amount: 500,
    icon: 'fas fa-shuttle-van',
  },
  {
    name: 'adidas 鞋',
    category: '其它',
    date: '2021-05-06',
    amount: 5000,
    icon: 'fas fa-pen',
  },
];

db.once('open', () => {
  for (let i = 0; i < data.length; i++) {
    Record.create({
      name: data[i].name,
      category: data[i].category,
      date: data[i].date,
      amount: data[i].amount,
      icon: data[i].icon,
    });
  }
  console.log('Done');
});
