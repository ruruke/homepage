<script setup lang="ts">
</script>

<template>
  <div class="profile-container">
    <h1>お菓子食べませんか？</h1>
    <div class="profile-card">
      <img
          src="https://storage.ruruke.moe/misskey/file/original/c67846dd-ff11-4a5b-90f8-c32b42437f3c.png"
          alt="プロフィール画像"
          class="profile-image"
      />
      <h2 class="profile-title">Ryuuto Yoshimura</h2>
      <h2 class="profile-subtitle">(alias. ruru)</h2>
      <p>MMORPGとかが好きな人です。</p>
      <p>プログラミングはちょっとできます。</p>
      <div class="social-links">
        <div class="social-link">
          <v-icon icon="mdi-account-box"></v-icon>
          <a
              class="link"
              href="https://mi.ruruke.moe/@ruru"
              target="_blank"
              rel="noopener noreferrer"
          >
            Misskey
            <v-icon class="link-icon" icon="mdi mdi-open-in-new"></v-icon>
          </a>
        </div>
        <div class="social-link">
          <v-icon icon="mdi-github"></v-icon>
          <a
              class="link"
              href="https://github.com/ruruke"
              target="_blank"
              rel="noopener noreferrer"
          >
            GitHub
            <v-icon class="link-icon" icon="mdi mdi-open-in-new"></v-icon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  /* Renamed from .profile for clarity */
}

.profile-card {
  /* Existing or additional styles can remain here */
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 5em 0;
  user-select: none;
}

.profile-title {
  margin-top: 0;
  font-size: 2.2em;
}

.profile-subtitle {
  margin-top: 0;
  padding-bottom: 1em;
  font-size: 1.3em;
}

.social-links {
  margin-top: 2em;
}

.social-links a {
  color: #ff99aa;
  text-decoration: none;
}

.social-links a:hover {
  text-decoration: underline;
  color: #cc7788;
}

.social-links a:visited {
  color: #dd8899;
}

.social-links a:active {
  color: #aa5566;
}

.link {
  padding-left: 6px;
}

link-icon {
  font-size: 13px;
  padding-bottom: 7px;
}

.social-link {
  padding-top: 5px;
}
</style>