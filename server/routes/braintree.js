const express = require('express');
const braintree = require('../lib/braintree');

const router = express.Router();

/* GET client token */
router.get('/token', (req, res) => {
  braintree.clientToken.generate({}, (err, response) => {
    res.json(response);
  });
});

router.post('/sale', (req, res) => {
  const { nonce, amount } = req.body;

  braintree.transaction.sale({
    amount,
    paymentMethodNonce: nonce,
    options: {
      submitForSettlement: true,
    },
  }).then((result) => {
    if (result.success) {
      console.log(`Transaction ID: ${result.transaction.id}`);
      res.json(result);
    } else {
      console.error(result.message);
      res.status(500).json({ error: result.message, result });
    }
  }).catch((error) => {
    res.status(500).json({ error });
  });
});

module.exports = router;
