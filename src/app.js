const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const urlMongo = process.env.DB === 'localhost' ? 
  `mongodb://localhost:27017/chamados`: 
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds153841.mlab.com:53841/chamados`;

const routes = require('./routes');

const app = express();

mongoose.set('useCreateIndex', true);
mongoose.connect(urlMongo, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

app.use(cors())

app.use(express.json());
app.use(routes);

module.exports = app;