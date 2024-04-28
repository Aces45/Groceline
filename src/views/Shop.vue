<template>
    <h1>Shop</h1>
    <hr />
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Chocolate bars', price: 50, category: 'food', img: '../assets/images/' },
      ]
    }
  }
}
</script>

<style>
hr{
  border: 1px solid rgb(177, 177, 177)
}
.itemCard{

}
</style>