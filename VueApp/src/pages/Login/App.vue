<template>
  <div id="app">
    <h1>Login</h1>
    <Login />
  </div>
</template>

<script>
import Login from '../../components/Login'
export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
