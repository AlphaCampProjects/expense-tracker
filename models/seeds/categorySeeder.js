const db = require('../../config/mongoose');
const Category = require('../category');

const data = [
  {
    name: '飲食',
    icon: 'fas fa-utensils',
  },
  {
    name: '休閒娛樂',
    icon: 'fas fa-grin-beam',
  },
  {
    name: '交通',
    icon: 'fas fa-shuttle-van',
  },
  {
    name: '家庭',
    icon: 'fas fa-home',
  },
  {
    name: '其它',
    icon: 'fas fa-pen',
  },
];

db.once('open', () => {
  for (let i = 0; i < data.length; i++) {
    Category.create({
      name: data[i].name,
      icon: data[i].icon,
    });
  }
  console.log('Category Done');
});
