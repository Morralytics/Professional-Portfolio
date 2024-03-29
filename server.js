const path = require('path');
const express = require('express');
const exphb = require('express-handlebars');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Now listening to server on port ${PORT}`));