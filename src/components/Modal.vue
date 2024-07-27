<template>
  <div class="modal">
    <img :src="image" height="200px" width="200px">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default ({
  props: ['message', 'image']
})
</script>
