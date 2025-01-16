<script setup lang="ts">

</script>

<template>
  <div class="profile">
    <h1>お菓子食べませんか？</h1>
    <div class="profile-card">
      <!-- プロフィール画像 -->
      <img src="https://storage.ruruke.moe/misskey/file/original/c67846dd-ff11-4a5b-90f8-c32b42437f3c.png" alt="プロフィール画像" class="profile-image" />
      <h2 style="margin-top: 0px;">ruru</h2>

      <!-- 自己紹介文 -->
      <p>
        色々やってる人です。
      </p>

      <!-- ソーシャルリンク -->
      <div class="social-links">
        <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a>
        <v-icon color="info" icon="mdi-github"><a href="https://github.com/example" target="_blank" rel="noopener noreferrer">GitHub</a></v-icon>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-image{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}
</style>