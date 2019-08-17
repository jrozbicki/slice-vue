<template>
  <md-content class="md-elevation-3">
    <md-avatar class="md-avatar-icon md-primary">
      <md-icon>lock_open</md-icon>
    </md-avatar>
    <h1 class="md-headline">Sign in</h1>

    <form @submit.prevent="signIn">
      <md-field>
        <label for="email">Email</label>
        <md-input type="email" id="email" v-model="email" autocomplete="email" required autofocus />
      </md-field>

      <md-field>
        <label for="password">Password</label>
        <md-input
          id="password"
          type="password"
          v-model="password"
          autocomplete="current-password"
          required
        />
      </md-field>

      <md-button type="submit" class="md-raised md-primary">Sign in</md-button>
      <div class="text-between">Don't have account? Go and Sign up below!</div>
      <md-button to="/signup" class="md-raised md-accent">Sign up</md-button>
    </form>
  </md-content>
</template>

<script>
import Vue from "vue";
import {
  MdContent,
  MdAvatar,
  MdIcon,
  MdField,
  MdButton
} from "vue-material/dist/components";

Vue.use(MdContent);
Vue.use(MdAvatar);
Vue.use(MdIcon);
Vue.use(MdField);
Vue.use(MdButton);

export default {
  name: "LoginForm",
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    signIn() {}
  }
};
</script>

<style lang="scss" scoped>
.md-content {
  min-width: 40%;
  padding: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 380px;
}

.md-headline {
  text-align: center;
}

.md-button {
  margin: 0px;
  width: 100%;
}

.text-between {
  padding: 16px 16px;
  text-align: center;
}
</style>
