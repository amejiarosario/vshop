<template>
  <section>
    <div id="dropin-container" v-show="unpaid && amount > 0"></div>
    <button @click="pay" :disabled="amount <= 0">Checkout</button>
  </section>
</template>

<script>
// https://developers.braintreepayments.com/guides/drop-in/setup-and-integration/javascript/v3
import dropin from 'braintree-web-drop-in';
import axios from 'axios';

export default {
  name: 'payment',

  props: {
    amount: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      clientToken: null,
      errors: null,
      unpaid: true,
    };
  },

  mounted() {
    axios
      .get(`${process.env.VUE_APP_SERVER_ENDPOINT}/braintree/token`)
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
      .catch(error => this.$emit('error', error));
  },

  methods: {
    pay() {
      this.dropinInstance.requestPaymentMethod()
        .then(payload => axios.post(`${process.env.VUE_APP_SERVER_ENDPOINT}/braintree/sale`, {
          nonce: payload.nonce,
          amount: this.amount,
        })).then((response) => {
          this.unpaid = false;
          this.$emit('success', response.data.transaction);
        })
        .catch((error) => {
          this.$emit('error', error);
        });
    },
  },
};
</script>

