const Category = require('../category');
const db = require('../../config/mongoose');

const data = [
  {
    category: 'food',
  },
  {
    category: 'entertainment',
  },
  {
    category: 'travel',
  },
  {
    category: 'shopping',
  },
  {
    category: 'transportation',
  },
];

db.once('open', () => {
  for (let i = 0; i < data.length; i++) {
    Category.create({
      category: data[i].category,
    });
  }
  console.log('Category Done');
});
