const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

app.set('view engine', 'hbs');

//server contenido estatico
app.use(express.static('public'));

app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/generic/index.html')
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})