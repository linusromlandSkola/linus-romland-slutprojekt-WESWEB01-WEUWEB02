<template>
  <form id="theForm">
      <input
        type="text"
        placeholder="Username"
        class="fadeIn second"
        id="username"
        name="username"
      />
      <input
        type="password"
        placeholder="Password"
        class="fadeIn third"
        id="password"
        name="password"
      />
      <p id="errorText"></p>
      <input type="submit" class="fadeIn fourth" value="Log In" />
    </form>
</template>

<script>
export default {
  name: "Login",
};
</script>

