<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <v-app>
    <Header />
    <v-main class="content">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped>
.content {
  padding-top: 4em;
  background: transparent;
}
</style>
