const express = require('express');
const router = express.Router();
const Category = require('../../models/category');
const Record = require('../../models/record');

//creat new record
router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .then((category) => res.render('new', { category }))
    .catch((error) => console.error(error));
});

router.post('/', (req, res) => {
  const record = req.body;
  const category = req.body.category;

  Category.findOne({ name: category })
    .lean()
    .then(function (item) {
      return (record.icon = item.icon);
    })
    .then(() => {
      Record.create(record).then(() => res.redirect('/'));
    })
    .catch((error) => console.log(error));
});

// update a record
router.get('/:id/edit', (req, res) => {
  const record = req.body;
  const id = req.params.id;
  const categoryList = [];
  Category.find()
    .lean()
    .then((items) => {
      items.forEach((item) => categoryList.push(item.name));
    });

  return Record.findById(id)
    .lean()
    .then((record) => res.render('edit', { record, categoryList }));
});

router.put('/:id/', (req, res) => {
  const id = req.params.id;
  let { name, date, category, amount } = req.body;
  return Record.findById(id)
    .then((record) => {
      record.name = name;
      record.date = date;
      record.category = category;
      record.amount = amount;
      // 找到特定的category icon並更新修改的icon
      Category.findOne({ name: category })
        .lean()
        .then((item) => {
          record.icon = item.icon;
        })
        .then(() => {
          record.save();
        });
    })
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error));
});

// delete a record
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  return Record.findById(id)
    .then((record) => record.remove())
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error));
});

module.exports = router;
