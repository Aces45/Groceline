<template>
  <div class="navbar" id="nav">
    <router-link to="/" class="navbar-logo">GroceLine</router-link>
    <router-link to="/" class="navbar-item">Home</router-link>
    <router-link to="shop" class="navbar-item">Shop</router-link>
    <router-link to="about" class="navbar-item">About</router-link>
    <router-link to="profile" class="navbar-item">Profile</router-link>
    <router-link to="signup" class="navbar-item">Signup</router-link>
    <router-link to="login" class="navbar-item">Login</router-link>
    <a id="cart" class="navbar-item" @click="toggleCart()"><i class="fa-solid fa-cart-shopping"></i><span v-if="cart.length" class="red-ping">{{ cart.length }}</span></a>
  </div>

  <div class="container" @click.self="hideCart()">
    <transition>
      <router-view @addItem="addItem"/>
    </transition>
    <transition>
      <Cart v-if="displayCart" @closeCart="hideCart()" :cart="cart" @removeItem="removeItem"/>
    </transition>
  </div>
</template>

<script>
import Cart from './components/Cart.vue';

export default {
  components: { Cart },
  data() {
    return {
      cart: [],
      displayCart: false
    }
  },
  methods: {
    toggleCart() {
      (this.displayCart) ? this.hideCart() : this.showCart();
    },
    showCart() {
      this.displayCart = true;
      const cart = document.getElementById('cart');
      cart.classList.add('router-link-exact-active');
    },
    hideCart() {
      this.displayCart = false;
      const cart = document.getElementById('cart');
      cart.classList.remove('router-link-exact-active');
    },
    addItem(item) {
      item.quantity = 1
      this.cart.push(item);
    },
    removeItem(id){
    this.cart = this.cart.filter(item => {
        return item.id != id
      })
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

.cart {
  z-index: 999;
  border-radius: 20px;
  background-color: peachpuff;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;

  padding: 0 1rem;
  position: fixed;
  top: 10%;
  left: 25%;

  overflow: auto;
  max-height: 80vh;
  width: 50vw;
}

.cart-btn{
  font-size: 1.2rem;
  font-weight: bold;
  padding: 5px;
  width: 2rem;
  height: 2rem;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.content{
  padding: 0 2%;
}

.close-btn {
  cursor: pointer;
  border-radius: 10px;
  width: 8%;
  height: 30px;
  background-color: #ff4032;
  border: none;
  font-size: large;
  color:white;
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
  .container {
    margin: 0;
  }

  .item-box {
    width: 75% !important;
    margin: auto;
  }

  .navbar, .navbar-item{
    padding: 0 1rem !important;
    font-size: 1rem !important;
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

.text-group {
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

.red-ping {
  width: 1.5rem;
  margin: 0.15rem;
  border-radius: 1.5rem;
  background-color: #ff2d1e;
  cursor: default;
  color: white;
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>
