<template>
  <div class="navbar" id="nav">
    <router-link to="/" class="navbar-logo">GroceLine</router-link>
    <router-link route="shop" to="shop" class="navbar-item">Shop</router-link>
    <a class="navbar-item" @mouseover="showCart()" @mouseleave="hideCart()">Cart <span class="red-ping">{{this.cart.length}}</span></a>
    <router-link route="about" to="about" class="navbar-item">About</router-link>
    <router-link route="profile" to="profile" class="navbar-item">Profile</router-link>
    <router-link route="signup" to="signup" class="navbar-item">Signup</router-link>
    <router-link route="login" to="login" class="navbar-item">Login</router-link>
    </div>

    <div class="container">
      <Cart v-if="displayCart"/>
      <router-view />
    </div>
</template>

<script>
import Cart from './components/Cart.vue';

export default {
  components: { Cart },
  data() {
    return {
      cart: ['item', 'item', 'item'],
      displayCart: false
    }
  },
  methods: {
    showCart(){
      this.displayCart = true;
    },
    hideCart(){
      this.displayCart = false;
    }
  }
}
</script>


<style>
#app {
  text-align: center;
}

h1 {
  color: rgb(82, 82, 82);
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Comfortaa";
  background-size: contain;
  background-repeat: no-repeat;
  background-image: linear-gradient(white, #93c47dff);
}

.cart{
  position: fixed;

  background-color: "red";
}

.container {
  margin: 0 5rem;
  padding-top: 50px;
  height: 100%;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  color: #93c47dff;
  background-color: white;
}

@font-face {
  font-family: "Rockwell";
  src: url("~@/assets/fonts/Rockwell.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Comfortaa";
  src: url("~@/assets/fonts/Comfortaa-VariableFont_wght.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

@media screen and (max-width: 1000px) {
  /*style if the screen is smaller than 1000px*/
  .container{
    margin: 0;
  }
  .item-box{
    width: 75% !important;
    margin: auto;
  }
  p {
    padding: 0;
  }
  .text-group {
    display: flex;
    flex-direction: column;
  }
}

/* acts as linebreak in between divs */
.break {
  flex-basis: 100%;
  height: 0;
}

.main {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px 75px;
}

.item-carousel {
  margin: 1%;
  border: 2px solid black;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 350px;
}

.item-box {
  height: auto;
  width: 25%;
}

.text-group{
  text-align: center;
}

.navbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5%;

  padding: 0 15rem;
  background-color: #93c47d;
}

.navbar-item {
  height: 60px;
  padding: 0 10px;
  border-radius: 30px 30px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 1.3rem;
  text-decoration: none;

  transition: all 0.2s ease-in-out;
}

/* highlights navbar item on hover */
.navbar-item:hover {
  color: #93c47dff;
  background-color: white;
}

.navbar-logo {
  margin-right: auto;
  font-size: 2em;
  user-select: none;
  text-decoration: none;
  font-family: "Rockwell";
  color: white !important;
  background: none !important;
}

.red-ping{
  width: 1.5rem;
  margin: 0.15rem;
  border-radius: 1.5rem;
  background-color: red;
  color:white;
  font-weight: bold;
}

.text {
  font-size: 1.3rem;
  text-indent: 50px;
  text-align: justify;
  text-justify: inter-word;
}

.text h2 {
  text-indent: 0;
  text-align: center;
}

.text li {
  text-indent: 0;
}

ul {
  list-style-type: "> ";
}
</style>
