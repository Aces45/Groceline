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
      <!-- <img :src="creamPuffs[Math.floor(Math.random() * creamPuffs.length)]"/> -->
      <img :src="creamPuffs[Math.floor(Math.random() * creamPuffs.length)]" width="180px" height="180px"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Creampuff', price: 50, category: 'food', img: '' },
        { id: 2, name: 'Creampuff', price: 50, category: 'food', img: '' },
        { id: 3, name: 'Creampuff', price: 50, category: 'food', img: '' },
        { id: 4, name: 'Creampuff', price: 50, category: 'food', img: '' },
        { id: 5, name: 'Creampuff', price: 50, category: 'food', img: '' },
        { id: 6, name: 'Creampuff', price: 50, category: 'food', img: '' },
        { id: 7, name: 'Creampuff', price: 50, category: 'food', img: '' },
        { id: 8, name: 'Creampuff', price: 50, category: 'food', img: '' },
      ],
      creamPuffs: [
        '../assets/images/creampuff1.png',
        '../assets/images/creampuff2.png',
        '../assets/images/creampuff3.png',
        '../assets/images/creampuff4.png',
        '../assets/images/creampuff5.png',
      ]
    }
  },
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