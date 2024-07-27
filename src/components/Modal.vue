<template>
  <div class="modal">
    <img :src="image" height="100px" width="100px">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>

export default ({
  props: ['message', 'image']
})
</script>

<style>
.modal{
    z-index: 999;
    margin-left: 40%;
    height: auto;
    width: 500px;
    position: fixed;
    border-radius: 10px;
    background-color: pink;
}

</style>