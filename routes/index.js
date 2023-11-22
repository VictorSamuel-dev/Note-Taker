const express = require('express');

const htmlRoutes = require('../routes/htmlRoutes');

const apiRoutes = require('../routes/apiRoutes');

const app = express();

app.use('/api', apiRoutes);
app.use(htmlRoutes);

module.exports = app;