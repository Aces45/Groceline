<script setup>
// import images
import creamPuff1 from '../assets/images/creampuff1.png';
import creamPuff2 from '../assets/images/creampuff2.png';
import creamPuff3 from '../assets/images/creampuff3.png';
import creamPuff4 from '../assets/images/creampuff4.png';
import creamPuff5 from '../assets/images/creampuff5.png';

</script>

<template>
  <h1>Shop</h1>
  <hr />
  <div class="content">
    <div v-for="item in items" class="itemCard" :key="item.id">
      <h1>{{ item.name }}</h1>
      <h3>{{ item.category }}</h3>
      <img :src="item.img" width="180px" height="180px" />
      <button @click="addToCart(item)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Creampuff', price: 50, category: 'food', img: creamPuff1 },
        { id: 2, name: 'Creampuff', price: 50, category: 'food', img: creamPuff2 },
        { id: 3, name: 'Creampuff', price: 50, category: 'food', img: creamPuff3 },
        { id: 4, name: 'Creampuff', price: 50, category: 'food', img: creamPuff4 },
        { id: 5, name: 'Creampuff', price: 50, category: 'food', img: creamPuff5 },
        { id: 6, name: 'Creampuff', price: 50, category: 'food', img: creamPuff1 },
        { id: 7, name: 'Creampuff', price: 50, category: 'food', img: creamPuff2 },
        { id: 8, name: 'Creampuff', price: 50, category: 'food', img: creamPuff3 },
        { id: 9, name: 'Creampuff', price: 50, category: 'food', img: creamPuff4 },
        { id: 10, name: 'Creampuff', price: 50, category: 'food', img: creamPuff5 },
        { id: 11, name: 'Creampuff', price: 50, category: 'food', img: creamPuff1 },
        { id: 12, name: 'Creampuff', price: 50, category: 'food', img: creamPuff1 },
        { id: 13, name: 'Creampuff', price: 50, category: 'food', img: creamPuff2 },
      ],
    }
  },
  methods: {
    addToCart(item) {
      item.quantity = 1;
      this.$emit('addItem', item);
    }
  }
}
</script>

<style scoped>
hr {
  border: 1px solid rgb(177, 177, 177);
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  flex-direction: row;
  column-gap: 20px;
  row-gap: 20px;
}
.itemCard {
  padding: 5px;
  font-size: 0.7rem;
  height: 300px;
  width: 200px;
  border-radius: 10px;
  background-color: rgb(255, 255, 202);
  transition: all 0.1s ease-in;
}
.itemCard:hover {
  scale: 1.1;
}
</style>