const express = require('express');
const app = express();

const port = 3000;
const exphbs = require('express-handlebars');
const Record = require('./models/record');
const bodyParser = require('body-parser');

require('./config/mongoose');
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/records/new', (req, res) => {
  res.render('new');
});

app.post('/records', (req, res) => {
  const records = req.body;
  return Record.create(records)
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error));
});
app.listen(port, () => {
  console.log(`The express server is running on http://localhost:${port}`);
});
