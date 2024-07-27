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
    height: auto;
    width: 500px;
    position: fixed;
    margin-top: 1rem;
    border-radius: 10px;
    background-color: rgb(255, 255, 202);
    border: 5px solid #93C47D;
}

</style>