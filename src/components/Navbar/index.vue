<template>
  <button @click="logout">Log out</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Navbar",
  methods: {
    ...mapActions(["logoutAction"]),
    logout() {
      this.logoutAction();
    }
  }
};
</script>