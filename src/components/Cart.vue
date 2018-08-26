<template>
  <section class="cart">

    <v-data-table
      :headers="headers"
      :items="products"
      hide-actions
      class="elevation-1">

      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <!-- <td class="text-xs-right">{{ props.item.description }}</td> -->
        <td>{{ props.item.quantity }}</td>
        <td>{{ props.item.price | currency }}</td>
        <td>{{ props.item.subtotal | currency }}</td>
      </template>

    <template slot="footer">
      <td colspan="3">
        <strong>Total</strong>
      </td>
      <td colspan="1">
        <strong>{{ cartTotalPrice | currency }}</strong>
      </td>
    </template>

    </v-data-table>

    <div>
      <!-- <button @click="checkout(products)">Checkout</button> -->
      <payment :amount="cartTotalPrice"
               @error="paymentFailed"
               @success="paymentReceived"></payment>
      <span v-show="status"> {{ status }}. {{ details }}</span>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import Payment from '@/components/Payment.vue';

export default {
  name: 'cart',

  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        // { text: 'Description', value: 'Description' },
        { text: 'quantity', value: 'quantity' },
        { text: 'price', value: 'price' },
        { text: 'subtotal', value: 'subtotal' },
      ],
    };
  },

  components: {
    Payment,
  },

  computed: {
    ...mapState('cart', [
      'status',
      'details',
    ]),
    ...mapGetters('cart', {
      products: 'cartProducts',
      cartTotalPrice: 'cartTotalPrice',
      cartTotalItems: 'cartTotalItems',
    }),
  },

  methods: {
    ...mapActions('cart', [
      'paymentReceived',
      'paymentFailed',
    ]),
  },
};
</script>
