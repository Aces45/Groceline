<template>
  <h1>Cart</h1>
  <div class="container">
    <table>
      <thead>
        <tr>
          <td>Header</td>
          <td>Item</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="../assets/images/creampuff1.png"/></td>
          <td>Creampuff</td>
          <td>2</td>
          <td>50</td>
          <td>100</td>
        </tr>
        <tr>
          <td><img src="../assets/images/creampuff2.png"/></td>
          <td>Creampuff</td>
          <td>5</td>
          <td>30</td>
          <td>150</td>
        </tr>
        <tr>
          <td><img src="../assets/images/creampuff3.png"/></td>
          <td>Creampuff</td>
          <td>3</td>
          <td>40</td>
          <td>120</td>
        </tr>
        <tr>
          <td><img src="../assets/images/creampuff4.png"/></td>
          <td>Creampuff</td>
          <td>6</td>
          <td>60</td>
          <td>360</td>
        </tr>
        <tr>
          <td><img src="../assets/images/creampuff5.png"/></td>
          <td>Creampuff</td>
          <td>2</td>
          <td>80</td>
          <td>160</td>
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
thead,
td {
  background-color: rgb(255, 255, 202);
  font-size: 1.5rem;
  border: solid 1px black;
  padding: 10px;
}
table,
thead {
  border-radius: 10px;
}
</style>