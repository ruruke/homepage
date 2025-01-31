<script setup lang="ts">

</script>

<template>
  <div class="profile">
    <h1>お菓子食べませんか？</h1>
    <div class="profile-card">
      <!-- プロフィール画像 -->
      <img src="https://storage.ruruke.moe/misskey/file/original/c67846dd-ff11-4a5b-90f8-c32b42437f3c.png" alt="プロフィール画像" class="profile-image" />
      <h2 style="margin-top: 0px; font-size: 2.2em;">Ryuuto Yoshimura</h2>
      <h2 style="margin-top: 0px; padding-bottom: 1em; font-size: 1.3em;">(alias. ruru)</h2>

      <!-- 自己紹介文 -->
      <p>MMORPGとかが好きな人です。</p>
      <p>プログラミングはちょっとできます。</p>

      <!-- ソーシャルリンク -->
      <div class="social-links">
        <div class="social-link">
          <v-icon  icon="mdi-account-box"></v-icon>
          <a class="link" href="https://mi.ruruke.moe/@ruru" target="_blank" rel="noopener noreferrer">Misskey<v-icon class="link-icon" icon="mdi mdi-open-in-new"></v-icon></a>
        </div>
        <div class="social-link">
          <v-icon  icon="mdi-github"></v-icon>
          <a class="link" href="https://github.com/ruruke" target="_blank" rel="noopener noreferrer">GitHub<v-icon class="link-icon" icon="mdi mdi-open-in-new"></v-icon></a>
        </div>
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
  margin: 5em 0;
  user-select: none;
}
.social-links {
  margin-top: 2em;
}
/* 通常（未訪問）リンク */
.social-links a {
  color: #ff99aa; /* ピンク基調 */
  text-decoration: none; /* 下線なし */
}

/* ホバー時（hover）のリンク */
.social-links a:hover {
  text-decoration: underline; /* ホバーで下線をつける */
  color: #cc7788; /* ピンクを基準に少し濃いめ */
}

/* 訪問済みリンク（visited） */
.social-links a:visited {
  color: #dd8899; /* ベースより落ち着いた色 */
}

/* アクティブな状態（クリック中など） */
.social-links a:active {
  color: #aa5566; /* より濃い色を使用 */
}
.link {
  padding-left: 6px;
}

link-icon  {
  font-size: 13px;
  padding-bottom: 7px;
}
.social-link {
  padding-top: 5px;
}
</style>