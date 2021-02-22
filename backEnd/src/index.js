const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./routes/shortner.router');

const app = express();

app.use(cors());

app.use('/api', router)

app.get('/', (req, res) => {
  res.send({message: "Hi!"});
})

app.listen(3000, () => {
  console.log('Executando na porta 3000')
});

