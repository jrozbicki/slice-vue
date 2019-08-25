<template>
  <v-card>
    <div class="flex-center">
      <v-avatar color="primary">
        <v-icon color="white">mdi-lock-open</v-icon>
      </v-avatar>
    </div>
    <h1 class="v-headline">Sign in</h1>

    <form @submit.prevent="login">
      <v-text-field type="email" v-model="email" autocomplete="email" required autofocus />

      <v-text-field
        type="password"
        v-model="password"
        autocomplete="current-password"
        label="Password"
        required
      />

      <v-btn type="submit" color="primary">Sign in</v-btn>
      <div class="text-between">Don't have account? Go and Sign up below!</div>
      <v-btn to="/signup">Sign up</v-btn>
    </form>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import { VCard, VBtn, VTextField, VAvatar, VIcon } from "vuetify/lib";

export default {
  name: "LoginForm",
  components: {
    VTextField,
    VCard,
    VBtn,
    VAvatar,
    VIcon
  },
  data: () => ({
    email: "test@slice.com",
    password: "password"
  }),
  methods: {
    ...mapActions(["loginAction"]),
    login() {
      this.loginAction({ email: this.email, password: this.password });
    }
  }
};
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
}

.v-card {
  width: 50%;
  padding: 16px;
  margin: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 360px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
}

.v-headline {
  text-align: center;
}

.v-btn {
  margin: 0px;
  width: 100%;
}

.text-between {
  padding: 16px 16px;
  text-align: center;
}
</style>
