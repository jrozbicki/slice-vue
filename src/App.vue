<template>
  <v-app>
    <component :is="layout">
      <router-view></router-view>
    </component>
  </v-app>
</template>

<script>
import { authObserver } from "./api/membership";

export default {
  name: "App",
  computed: {
    layout() {
      return this.$route.meta.layout || "DefaultLayout";
    }
  },
  created() {
    authObserver();
  }
};
</script>
