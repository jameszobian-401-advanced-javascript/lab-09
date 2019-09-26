'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

<<<<<<< HEAD
require('./src/app.js.js.js').start(process.env.PORT);
=======
require('./src/app').start(process.env.PORT);
>>>>>>> 042973c8af152a82966146a6c94526fc7f0a22df
