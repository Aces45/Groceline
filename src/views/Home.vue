<template>
  <!-- <div class="navbar">
    <a href="index.html" class="navbar-item" v-for="item in navitems" :class="item.class" :id="item.id" >{{ item.name }}</a>
  </div> -->
  <div class="main">
    <!-- <div class="carousel carousel--full-width carousel--prev-next-small-outside flickity-enabled is-draggable" data-flickity="" tabindex="0" >
      <div class="carousel-cell"><img src="../assets/logo.png" /></div>
      <div class="carousel-cell"><img src="../assets/logo.png" /></div>
      <div class="carousel-cell"><img src="../assets/logo.png" /></div>
      <button class="flickity-prev-next-button"></button>
    </div> -->
    <div class="item-carousel" style="height: 550px; width: 1000px">
      <h3>Insert image</h3>
    </div>
    <div class="break"></div>

    <div class="item-box">
      <div class="text">
        <h2>The Problem</h2>
        <p>
          There are a number of people that are busy with their work and/or
          socializing with their friends and relatives that there are times
          where it is hard to find time to do the grocery. Our application
          rectifies that problem.
        </p>
      </div>
    </div>
    <div class="item-box">
      <div class="text">
        <h2>Why GroceLine</h2>
        <p>
          GroceLine makes it easier to do the grocery. Our app would allow a
          person to select the brand, quantity, and the store of a desired
          product online. It then dispatches someone to the customer's address
          to deliver the items that they ordered. All of this in just a push of
          a button.
        </p>
      </div>
    </div>
    <div class="item-box">
      <div class="text">
        <h2>Features</h2>
        <ul>
          <li>Enables users to order groceries online</li>
          <li>
            Has a checkout feature that will show the order summary and total
            bill
          </li>
          <li>
            Enables users to pay only when their tiems have arrived, via cash on
            delivery
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: []
}

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
  // options
});
</script>

<style>
.carousel-cell {
  width: 100%; /* full width */
  height: 160px; /* height of carousel */
  margin-right: 10px;
}

.flickity-button {
  background: transparent;
}
/* big previous & next buttons */
.flickity-prev-next-button {
  width: 100px;
  height: 100px;
}
/* icon color */
.flickity-button-icon {
  fill: white;
}
/* hide disabled button */
.flickity-button:disabled {
  display: none;
}
</style>