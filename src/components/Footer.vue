<template>
  <footer class="footer">
<!--    <p>© 2025 syuilo and Misskey Project, "Misskey Mark"はSyuilo氏及びMisskey Projectの所有物です。</p>-->
    <p>© {{ currentYear }} ruru. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
const currentYear: number = new Date().getFullYear(); // 現在の年を取得
</script>

<style scoped>
/* フッター */
.footer {
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
}
</style>