const Category = require('../category');
const db = require('../../config/mongoose');

const data = [
  {
    name: '飲食',
    icon: `<i class="fas fa-utensils"></i>`,
  },
  {
    name: '休閒娛樂',
    icon: `<i class="fas fa-grin-beam"></i>`,
  },
  {
    name: '交通',
    icon: `<i class="fas fa-shuttle-van"></i>`,
  },
  {
    name: '家庭',
    icon: `<i class="fas fa-home"></i>`,
  },
  {
    name: '其它',
    icon: `<i class="fas fa-pen"></i>`,
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
