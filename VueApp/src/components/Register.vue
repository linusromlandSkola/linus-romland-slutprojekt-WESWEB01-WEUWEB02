<template>
  <form id="theForm">
      <input type="text" placeholder="username" name="username" id="username" />
      <br />
      <input
        type="password"
        placeholder="password"
        name="password"
        id="password"
      />
      <br />
      <input
        type="password"
        placeholder="Confirm Password"
        name="ConfirmPassword"
        id="passwordConfirm"
      />
      <p id="errorText"></p>
      <p id="infoText"></p>
      <input type="submit" value="Register" />
    </form>
</template>

<script>
export default {
  name: "Register",
};
</script>

