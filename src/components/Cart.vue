<template>
  <div class="cart">
    <button class="close-btn" @click="closeCart()"><i class="fa-solid fa-xmark"></i></button>
    <h2 v-if="cart.length == 0">Your cart is empty.</h2>
    <h2 v-else-if="cart.length == 1">You have 1 item in your cart.</h2>
    <h2 v-else>You have {{ cart.length }} items in your cart.</h2>
    <table>
        <tr>
            <td>ID</td>
            <td>Item</td>
            <td>Quantity</td>
        </tr>
        <tbody>
            <tr v-for="item in this.cart" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.quantity }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>

export default ({
  props: ['cart'],
  setup() {
  },
  methods: {
    closeCart(){
        this.$emit('closeCart')
    }
  }
})
</script>

<style>
table, td, tr {
    border: 1px solid black;
}
</style>
