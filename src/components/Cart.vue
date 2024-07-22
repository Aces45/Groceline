<template>
  <div class="cart">
    <div style="position:sticky; top: 0; background-color: peachpuff; opacity: 0.8;
    display: flex; align-items: center; justify-content: center;">
      <h2 v-if="cart.length == 0">Your cart is empty.</h2>
      <h2 v-else-if="cart.length == 1">You have 1 item in your cart.</h2>
      <h2 v-else>You have {{ cart.length }} items in your cart.</h2>
      <button>Checkout</button>
      <button class="close-btn" @click="closeCart()" style="justify-self: right"><i class="fa-solid fa-xmark"></i></button>
    </div>
      <table v-if="cart.length > 0">
          <tr>
              <td>Image</td>
              <td>Item</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Total</td>
              <td></td>
          </tr>
          <tbody>
              <tr v-for="item in this.cart" :key="item.id">
                  <td><img :src="item.img" height="100px" width="100px"/></td>
                  <td>{{ item.name }}</td>
                  <td><input type="number" v-model="item.quantity" title="Quantity" min="0"
                    style="font-size: 1.1rem; max-width: 20%; text-align: center; border-radius: 5px; border: 2px solid #93C47D"></td>
                  <td>₱{{ item.price }}</td>
                  <td>₱{{ item.quantity * item.price }}</td>
                  <td><button class="close-btn" @click="removeItem(item.id)" style="margin: 0; height: 40px; width: 40px; cursor: pointer;"><i class="fa-solid fa-trash"></i></button></td>
              </tr>
          </tbody>
      </table>
      </div>
  </template>

<script>

export default ({
  props: ['cart'],
  data()  {
    return{
    }
  },
  methods: {
    closeCart(){
        this.$emit('closeCart')
    },
    removeItem(id){
        if(confirm("Are you sure?")) this.$emit('removeItem', id);
    }
  },
})
</script>

<style>
table, td, tr {
  border: 1px solid #93C47D;
}

td, table {
    background-color: white;
}
</style>
