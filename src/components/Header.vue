<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const routes = router.getRoutes();
// Get all routes that should be shown in navigation
const navItems = routes.filter(route => route.name && route.meta.hideInNav !== true);
</script>

<template>
  <v-app-bar
    app
    flat
    color="rgba(105, 105, 105, 0.5)"
    class="px-3"
    elevation="1"
  >
    <v-app-bar-title>お菓子食べませんか？</v-app-bar-title>

    <v-spacer />

    <v-btn
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
      variant="text"
      rounded="lg"
      class="mx-1"
    >
      {{ item.name }}
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
.v-app-bar {
  backdrop-filter: blur(5px);
}
</style>
