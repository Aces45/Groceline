<template>
  <h1>Cart</h1>
  <div class="container">
    <table>
      <thead>
        <tr>
          <td>Header</td>
          <td>Header</td>
          <td>Header</td>
          <td>Header</td>
          <td>Header</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="../assets/logo.png"/></td>
          <td>content</td>
          <td>content</td>
          <td>content</td>
          <td>content</td>
        </tr>
        <tr>
          <td><img src="../assets/logo.png"/></td>
          <td>content</td>
          <td>content</td>
          <td>content</td>
          <td>content</td>
        </tr>
        <tr>
          <td><img src="../assets/logo.png"/></td>
          <td>content</td>
          <td>content</td>
          <td>content</td>
          <td>content</td>
        </tr>
        <tr>
          <td><img src="../assets/logo.png"/></td>
          <td>content</td>
          <td>content</td>
          <td>content</td>
          <td>content</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img{
  height: 100px;
  width: 100px;
}
.container {
  display: flex;
  justify-content: center;
  width: 50%;
  margin: auto;
}
table,
thead,
td {
  font-size: 1.5rem;
  border: solid 1px black;
  padding: 10px;
}
table,
thead {
  border-radius: 10px;
}
</style>