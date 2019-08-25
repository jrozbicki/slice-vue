<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "PrivateLayout",
  components: {
    Navbar
  }
};
</script>