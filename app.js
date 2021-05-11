const express = require('express');
const app = express();

const port = 3000;
const exphbs = require('express-handlebars');
const Record = require('./models/record');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./config/mongoose');
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  Record.find()
    .lean()
    .then((records) => res.render('index', { records }))
    .catch((error) => console.error(error));
});

//creat new record
app.get('/records/new', (req, res) => {
  res.render('new');
});

app.post('/records', (req, res) => {
  const record = req.body;
  return Record.create(record)
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
    .catch((error) => console.log(error));
});

// update a record
app.get('/records/:id/edit', (req, res) => {
  const id = req.params.id;
  return Record.findById(id)
    .lean()
    .then((record) => res.render('edit', { record }));
});

app.put('/records/:id/', (req, res) => {
  const id = req.params.id;
  const { name, date, category, amount } = req.body;

  return Record.findById(id)
    .then((record) => {
      record.name = name;
      record.date = date;
      record.category = category;
      record.amount = amount;
      return record.save();
    })
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error));
});

app.delete('/records/:id', (req, res) => {
  const id = req.params.id;
  return Record.findById(id)
    .then((record) => record.remove())
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error));
});

app.listen(port, () => {
  console.log(`The express server is running on http://localhost:${port}`);
});
