<template>
  <div class="cart">
    <button @click="closeCart()" style="width: 25%; margin: 0 auto"><i class="fa-solid fa-xmark"></i></button>
    <h1>This is the cart!</h1>
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
