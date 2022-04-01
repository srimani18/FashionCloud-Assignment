const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./configs/config');

require('./models/data');
require('./utils/redis');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(keys.MONGO_URI, { 
  useUnifiedTopology: true,
  useNewUrlParser: true
});

require('./routes/data')(app);

app.listen(port, () => console.log(`app is listening on port ${port}!`));