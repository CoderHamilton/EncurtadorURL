const express = require('express')
const Router = express.Router();

Router.get('/shortner', (req, res) => {
  res.send({message: 'Shortner'})
});

module.exports = Router;