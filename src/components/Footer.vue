<template>
  <v-footer app class="pa-3 footer">
    <v-row justify="center" no-gutters>
      <v-col cols="12" class="text-center">
        <span>© {{ CURRENT_YEAR }} ruru. All rights reserved.</span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
/**
 * Returns the current year for copyright notice
 */
function getCurrentYear(): number {
  return new Date().getFullYear();
}

// Using uppercase for constants
const CURRENT_YEAR = getCurrentYear();
</script>

<style scoped>
.footer {
  background-color: rgba(105, 105, 105, 0.3) !important;
  backdrop-filter: blur(5px);
  font-size: 14px;
}
</style>
