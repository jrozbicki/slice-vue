<template>
  <md-content class="md-elevation-3">
    <md-avatar class="md-avatar-icon md-primary">
      <md-icon>how_to_reg</md-icon>
    </md-avatar>
    <h1 class="md-headline">Sign up</h1>

    <form @submit.prevent="signUp">
      <md-field>
        <label for="signup-username">Username</label>
        <md-input id="signup-username" v-model="username" required autofocus />
      </md-field>

      <md-field>
        <label for="signup-email">Email</label>
        <md-input id="signup-email" type="email" v-model="email" autocomplete="email" required />
      </md-field>

      <md-field>
        <label for="signup-password">Password</label>
        <md-input id="signup-password" type="password" v-model="password" required />
      </md-field>

      <md-field>
        <label for="password">Repeat password</label>
        <md-input id="repeat-password" type="password" v-model="passwordRepeat" required />
      </md-field>

      <md-button type="submit" class="md-raised md-accent sign-up">Sign Up</md-button>

      <md-button to="/login" class="md-raised md-primary">Go back</md-button>
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
  name: "SignupForm",
  data: () => ({
    username: "",
    email: "",
    password: "",
    passwordRepeat: ""
  }),
  methods: {
    signUp() {}
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

.sign-up {
  margin-bottom: 16px;
}

.text-between {
  padding: 16px 16px;
}
</style>
