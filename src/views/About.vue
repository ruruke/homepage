<script setup lang="ts">
// Social media links
interface SocialLink {
  icon: string;
  name: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: 'mdi-account-box',
    name: 'Misskey',
    url: 'https://mi.ruruke.moe/@ruru'
  },
  {
    icon: 'mdi-github',
    name: 'GitHub',
    url: 'https://github.com/ruruke'
  }
];
</script>

<template>
  <v-card
    class="mx-auto my-8 profile-card fade-in"
    max-width="800"
    elevation="3"
    rounded="lg"
  >
    <v-card-title class="text-h3 text-center pt-6">
      お菓子食べませんか？
    </v-card-title>

    <v-card-text class="text-center">
      <v-avatar
        size="150"
        class="my-6 drop-down"
      >
        <v-img
          src="https://storage.ruruke.moe/misskey/file/original/c67846dd-ff11-4a5b-90f8-c32b42437f3c.png"
          alt="プロフィール画像"
        />
      </v-avatar>

      <h2 class="text-h4 mb-1">Ryuuto Yoshimura</h2>
      <h3 class="text-h5 mb-6">(alias. ruru)</h3>

      <p class="text-body-1">MMORPGとかが好きな人です。</p>
      <p class="text-body-1 mb-6">プログラミングはちょっとできます。</p>

      <v-divider class="mb-4" />

      <div class="social-links">
        <v-btn
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
          color="pink-lighten-3"
          class="mx-2"
          :prepend-icon="link.icon"
        >
          {{ link.name }}
          <v-icon end size="small">mdi-open-in-new</v-icon>
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
/* フェードインアニメーション用クラス */
.fade-in {
  opacity: 0.1;
  animation: fadeInEffect 0.7s ease-in-out forwards;
}

@keyframes fadeInEffect {
  to {
    opacity: 1;
  }
}

/* 落ちてくるアニメーションを追加 */
.drop-down {
  opacity: 0;
  transform: translateY(-50px);
  animation: dropDownEffect 1.5s ease forwards;
}

@keyframes dropDownEffect {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.profile-card {
  background-color: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(10px);
}

.social-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
