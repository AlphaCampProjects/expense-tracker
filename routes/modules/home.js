const express = require('express')
const router = express.Router()
const Category = require('../../models/category')

const Record = require('../../models/record')

router.get('/', (req, res) => {
  let totalAmount = 0
  const categoryList = []
  Category.find()
    .lean()
    .then((items) => {
      items.forEach((item) => categoryList.push(item.name))
    })

  Record.find()
    .lean()
    .then((records) => {
      records.forEach((record) => (totalAmount += record.amount))
      res.render('index', { records, totalAmount, categoryList })
    })
    .catch((error) => console.error(error))
})

module.exports = router
