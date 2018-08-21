<template>
  <section>
    <div id="dropin-container"></div>
    <button @click="pay">Checkout with Braintree</button>
  </section>
</template>

<script>
// https://developers.braintreepayments.com/guides/drop-in/setup-and-integration/javascript/v3
import dropin from 'braintree-web-drop-in';
import axios from 'axios';

export default {
  name: 'payment',

  data() {
    return {
      // instance: dropin.create({ /* options */ }),
      clientToken: null,
      errors: null,
    };
  },

  mounted() {
    axios
      .get('http://localhost:3000/braintree/token')
      .then((response) => {
        const { clientToken } = response.data;

        return dropin.create({
          authorization: clientToken,
          container: '#dropin-container',
          paypal: {
            flow: 'vault',
          },
        });
      })
      .then((dropinInstance) => {
        this.dropinInstance = dropinInstance;
      })
      .catch(error => console.log(error));
  },

  methods: {
    pay() {
      this.dropinInstance.requestPaymentMethod()
        .then(payload => console.log({ payload }))
        .catch(error => console.error(error));
    },
  },
};
</script>

