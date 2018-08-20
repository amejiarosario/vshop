const express = require('express');
const braintree = require('../lib/braintree');

const router = express.Router();

/* GET client token */
router.get('/token', (req, res) => {
  braintree.clientToken.generate({}, (err, response) => {
    res.json(response);
  });
});

module.exports = router;
