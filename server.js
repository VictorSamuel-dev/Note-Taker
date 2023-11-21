const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes')
const PORT = process.env.PORT || 3001;
// const api = require('./routes/index.js');
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
// app.use('/api', api);
app.use(htmlRoutes)
app.use(apiRoutes)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
