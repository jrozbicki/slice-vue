<template>
  <div class="membership-layout-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: "MembershipLayout"
};
</script>

<style scoped>
.membership-layout-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>