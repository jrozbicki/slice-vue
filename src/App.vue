<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
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
