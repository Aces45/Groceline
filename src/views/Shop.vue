<script setup>
// import images
import creamPuff1 from '@/assets/images/creampuff1.png';
import creamPuff2 from '@/assets/images/creampuff2.png';
import creamPuff3 from '@/assets/images/creampuff3.png';
import creamPuff4 from '@/assets/images/creampuff4.png';
import creamPuff5 from '@/assets/images/creampuff5.png';
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
      <h4 style="color:white">Categories</h4>
      <button @click = "reset"></button>
      <p class="category" v-for="category in categories" :key="category.id" style="cursor: pointer"
        @click="filterItems(category)">
        {{ category }}
      </p>
    </div>

    <div v-if="filteredDisplay.length" class="content">
      <div v-for="item in items" class="itemCard" :key="item.id">
        <h1>{{ item.name }}</h1>
        <h3>{{ item.category }}</h3>
        <img :src="item.img" width="180px" height="180px" />
        <h1>₱{{ item.price }}</h1>
        <button @click="addToCart(item)">Add to Cart</button>
      </div>
    </div>

    <div v-else class="content">
      <div v-for="item in items" class="itemCard" :key="item.id">
        <h1>{{ item.name }}</h1>
        <h3>{{ item.category }}</h3>
        <img :src="item.img" width="180px" height="180px" />
        <h1>₱{{ item.price }}</h1>
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
        { id: 1, name: 'Banana Creampuff', price: 50, category: 'creampuff', img: creamPuff1 },
        { id: 2, name: 'Frosted Creampuff', price: 60, category: 'creampuff', img: creamPuff2 },
        { id: 3, name: 'Creampuff', price: 50, category: 'food', img: creamPuff3 },
        { id: 4, name: 'Strawberry Creampuff', price: 70, category: 'food', img: creamPuff4 },
        { id: 5, name: 'Puffy Creampuff', price: 65, category: 'food', img: creamPuff5 },
        { id: 6, name: 'Banana Creampuff', price: 55, category: 'food', img: creamPuff1 },
        { id: 7, name: 'Frosted Creampuff', price: 65, category: 'food', img: creamPuff2 },
        { id: 8, name: 'Creampuff', price: 70, category: 'food', img: creamPuff3 },
        { id: 9, name: 'Strawberry Creampuff', price: 80, category: 'food', img: creamPuff4 },
        { id: 10, name: 'Puffy Creampuff', price: 80, category: 'food', img: creamPuff5 },
        { id: 11, name: 'Banana Creampuff', price: 75, category: 'food', img: creamPuff1 },
        { id: 12, name: 'Frosted Creampuff', price: 80, category: 'food', img: creamPuff2 },
        { id: 13, name: 'Creampuff', price: 90, category: 'food', img: creamPuff3 },
      ],
      filteredDisplay: [],
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
      let a = category.toLowerCase();
      console.log('Filter: ' + a)
      this.filteredDisplay = this.items.filter((item) => {
        return item.category == a;
      })
    }
  }
}
</script>

<style scoped>
hr {
  border: 1px solid rgb(177, 177, 177);
}

.category{
  width: 85%;
  height: 25px;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin: 5px auto;
  background-color: white;
  transition: all 0.2s ease-in-out;
}

.category:hover {
  scale: 1.08;
  background-color: #bdbdbd;
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
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;
  font-size: 0.7rem;
  min-height: 300px;
  width: 200px;
  border-radius: 10px;
  background-color: rgb(255, 255, 202);
  transition: all 0.2s ease-in-out;
}
.itemCard:hover {
  scale: 1.08;
  background-color: rgb(219, 219, 167);
}
</style>