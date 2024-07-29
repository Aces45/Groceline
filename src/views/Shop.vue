<script setup>
// import images
import creamPuff1 from '../assets/images/creampuff1.png';
import creamPuff2 from '../assets/images/creampuff2.png';
import creamPuff3 from '../assets/images/creampuff3.png';
import creamPuff4 from '../assets/images/creampuff4.png';
import creamPuff5 from '../assets/images/creampuff5.png';

</script>

<template>
  <div style="display: flex; justify-content: center;">
    <transition>
      <Modal v-if="showMessage" :message = "message" :image = "image"/>
    </transition>
  </div>
  <h1>Shop</h1>
  <hr />
  <div style="display: flex; flex-direction: row; padding: 1% 10%">
    <div style="background-color: #93C47D; width: 40%; border-radius: 10px; font-size: 1.5rem;">
      <p>Categories</p>
      <p class="category" v-for="category in this.categories" :key="category.id" style="cursor: pointer" @click="filterItems(category.name)">
        {{ category }}
      </p>
    </div>
    <div class="content">
      <div v-for="item in items" class="itemCard" :key="item.id">
        <h1>{{ item.name }}</h1>
        <h3>{{ item.category }}</h3>
        <img :src="item.img" width="180px" height="180px" />
        <button @click="addToCart(item)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
export default {
  components: [Modal],
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
      showMessage: false,
      message: "Test",
      image: "",
      categories: ['Beverage', 'Dessert', 'Food', 'Frozen']
    }
  },
  methods: {
    addToCart(item) {
      // temporary quantity value
      item.quantity = 1;

      // triggers addItem event to parent component
      this.$emit('addItem', item);

      // sets message and displays it
      this.message = item.name + " added to cart!";
      this.image = item.img;
      this.showMessage = true;

      // sets 2s timer for message modal
      setTimeout(() => {
        this.showMessage = false;
        console.log('Message hidden')
      }, 2000);
    },
    filterItems(category){

    }
  }
}
</script>

<style scoped>
hr {
  border: 1px solid rgb(177, 177, 177);
}

.category{
  width: 70%;
  height: 40px;
  text-align: center;
  border-radius: 10px;
  margin: 20px auto;
  background-color: white;
  transition: all 0.1s ease-in;
}

.category:hover {
  scale: 1.1;
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