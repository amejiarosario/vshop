const braintree = require('braintree');
require('dotenv').load();

// should be capitalized 'Sandbox' or 'Production'
const environment = process.env.BT_ENVIRONMENT;

const gateway = braintree.connect({
  environment: braintree.Environment[environment],
  merchantId: process.env.BT_MERCHANT_ID,
  publicKey: process.env.BT_PUBLIC_KEY,
  privateKey: process.env.BT_PRIVATE_KEY,
});

module.exports = gateway;
