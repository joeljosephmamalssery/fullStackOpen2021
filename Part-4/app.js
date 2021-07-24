const logger = require('./utils/logger');
const config = require('./utils/config');
const blogsRouter = require('./controllers/blogs');
const middleware = require('./utils/middleware');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
// var morgan = require('morgan');
// morgan.token('body', (request, response) => JSON.stringify(request.body));
// app.use(morgan(':method :url :status :response-time ms :body'));

mongoose
  .connect(config.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    logger.Dbconnected();
  })
  .catch((error) => {
    logger.error(error.message);
  });

app.use(cors());
// app.use(express.static('build'))
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/blogs', blogsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
