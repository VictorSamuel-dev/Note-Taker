const express = require('express');

const htmlRoutes = require('./htmlRoutes');

const app = express();

app.use(htmlRoutes)