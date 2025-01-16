<script setup lang="ts">
import About from './components/About.vue'
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="wrapper">
    <!-- ページのメインコンテンツ -->
    <main class="content">
      <About/>
    </main>

    <Footer/>
  </div>
</template>

<style scoped>

/* ページ全体を覆うラッパーレイアウト */
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* ページ全体の高さを確保 */
  margin: 0; /* 余白がある場合を防ぐ */
}

/* コンテンツ部分 */
.content {
  flex: 1; /* 余ったスペースを埋める */
  display: flex; /* フレックスレイアウトで調整可能 */
  flex-direction: column;
}

</style>
