<template>
  <section>
    <div id="dropin-container"></div>
    <button id="submit-button">checkout</button>
  </section>
</template>

<script>
// https://developers.braintreepayments.com/guides/drop-in/setup-and-integration/javascript/v3
import dropin from 'braintree-web-drop-in';

export default {
  name: 'payment',

  data() {
    return {
      instance: dropin.create({ /* options */ }),
    };
  },
};
</script>

