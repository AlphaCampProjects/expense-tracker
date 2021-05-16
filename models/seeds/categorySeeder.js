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
  Category.create(data)
    .then(() => {
      console.log('Category created!');
      return db.close();
    })
    .then(() => console.log('Database connection closed'))
    .catch((error) => console.log(error));
});
//  ({
//       name: data[i].name,
//       icon: data[i].icon,
//     });
//   }
//   console.log('insert category data done...');
//   return db.close();
