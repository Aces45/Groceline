<template>
  <h1>Profile</h1>
  <div class="container">
    <div class="left"><img src="../assets/logo.png"/></div>
    <div class="right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquid cupiditate voluptate vel laboriosam ipsa quod. Quia sunt vel nulla, eos dolorem mollitia eaque. Amet consequuntur incidunt quibusdam quae. Doloribus perferendis laudantium nisi distinctio illum eius tempora incidunt? Ipsa corporis soluta a culpa rem voluptates vitae ipsum labore veniam impedit?</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: auto;
  display: flex;
  gap: 2rem;
}

.left, .right{
  border-radius: 10px;
  font-size: 1.5rem;
  background-color: pink;
  min-height: 300px;
  padding: 30px;
  text-align: justify;
  text-indent: 50px;
}

.left {
  display: flex;
  justify-content: center;
  width: 40%;
}
.right {
  width: 60%;
}
</style>