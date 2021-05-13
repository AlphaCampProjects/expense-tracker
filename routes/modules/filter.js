// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', (req, res) => {
  const filter = req.query.filter
  let totalAmount = 0
  const categoryList = []
  if (filter === '篩選支出') {
    res.redirect('/')
  } else {
    Category.find()
      .lean()
      .then((items) => {
        items.forEach((item) => categoryList.push(item.name))
      })
    Record.find({ category: filter })
      .lean()
      .then((records) => {
        records.forEach((record) => (totalAmount += record.amount))
        res.render('index', { records, categoryList, totalAmount, filter })
      })
  }
})

module.exports = router
