<template>
  <div id="app">
    <h1>Login</h1>
    <Login v-if="haveAccount" />
    <Register v-else />
    <button @click="registerPage">{{ registerBtnText }}</button>
  </div>
</template>

<script>
import Login from "../../components/Login";
import Register from "../../components/Register";

export default {
  name: "App",
  components: {
    Login,
    Register,
  },
  data() {
    return {
      haveAccount: true,
      registerBtnText: "Don't have an account?",
    };
  },
  methods: {
    registerPage() {
      if (this.haveAccount) {
        this.haveAccount = false;
        this.registerBtnText = "Already have an account?";
      } else {
        this.haveAccount = true;
        this.registerBtnText = "Don't have an account?";
      }
    },
  },
};
</script>

<style>
* {
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
