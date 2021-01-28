<template>
  <div>
    <ul>
      <li><a href="#">Romland.Space File Upload</a></li>
      <li id="uploadFileLink"><a href="#">Upload File</a></li>
      <li><a class="#" href="#">About</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  display: flex;
  flex-direction: row;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
#uploadFileLink{
    margin-left: auto;
}
</style>