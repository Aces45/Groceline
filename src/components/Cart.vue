<template>
  <div class="cart">
    <button>TEST</button>
    <h1>This is the cart!</h1>
    <h2>test</h2>
  </div>
</template>

<script>

export default ({
  setup() {
  },
  methods: {
    holdCart(){
        this.$emit('holdCart')
    }
  }
})
</script>
