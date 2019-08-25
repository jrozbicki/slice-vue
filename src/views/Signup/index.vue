<template>
  <v-card>
    <div class="flex-center">
      <v-avatar color="primary">
        <v-icon color="white">mdi-account-check</v-icon>
      </v-avatar>
    </div>
    <h1 class="v-headline">Sign up</h1>

    <form @submit.prevent="signUp">
      <v-text-field v-model="username" label="Username" required />
      <v-text-field v-model="email" label="Email" required />
      <v-text-field v-model="password" label="Password" type="password" required />
      <v-text-field v-model="passwordRepeat" label="Repeat password" type="password" required />

      <v-btn type="submit" color="primary" class="sign-up">Sign Up</v-btn>

      <v-btn to="/login" class>Go back</v-btn>
    </form>
  </v-card>
</template>

<script>
import { VCard, VAvatar, VIcon, VBtn, VTextField } from "vuetify/lib";

export default {
  name: "SignupForm",
  components: {
    VCard,
    VAvatar,
    VIcon,
    VTextField,
    VBtn
  },
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

.v-avatar {
  margin: 16px auto;
}

.v-headline {
  text-align: center;
}

.v-btn {
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
