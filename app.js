const express = require('express');
const app = express();

const port = 3000;
const exphbs = require('express-handlebars');
const Record = require('./models/record');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./routes');
const helper = exphbs.create({
  defaultlayout: 'main',
  extname: 'hbs',
  helpers: {
    eq: function (v1, v2) {
      return v1 === v2;
    },
  },
});
require('./config/mongoose');
app.engine('hbs', helper.engine);
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }));
// setting static files
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use(routes);
app.listen(port, () => {
  console.log(`The express server is running on http://localhost:${port}`);
});
