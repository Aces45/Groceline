<template>
  <div class="navbar" id="nav">
    <router-link to="/" class="navbar-logo">GroceLine</router-link>
    <router-link v-for="link in navLinks" :to="link.route" :key="link.id" class="navbar-item" >{{ link.name }}</router-link >
  </div>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { id: 1, route: '/', name: 'Home' },
        { id: 2, route: 'shop', name: 'Shop' },
        { id: 3, route: 'cart', name: 'Cart' },
        { id: 4, route: 'about', name: 'About' },
        { id: 5, route: 'profile', name: 'Profile' },
        { id: 6, route: 'signup', name: 'Signup' },
        { id: 7, route: 'login', name: 'Login' },
      ],
    }
  },
  methods: {
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

html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  font-family: "Comfortaa";
  background-size: contain;
  background-repeat: no-repeat;
  background-image: linear-gradient(white, #93c47dff);
}

.container {
  justify-content: center;
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
  body{

    /*code if the screen is smaller than 1000px*/
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

.navbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5%;

  padding: 0 1%;
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
