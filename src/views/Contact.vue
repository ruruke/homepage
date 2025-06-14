<script setup lang="ts">
import { ref, reactive } from 'vue';

/**
 * Social media configuration
 */
interface SocialMedia {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

// Owner's social media profiles
const socialMediaProfiles: SocialMedia[] = [
  {
    id: 'ruruke',
    platform: 'GitHub',
    url: 'https://github.com/ruruke',
    icon: 'mdi-github'
  },
  {
    id: 'rurukeffxiv',
    platform: 'Twitter',
    url: 'https://twitter.com/rurukeffxiv',
    icon: 'mdi-twitter'
  },
  {
    id: 'ruru',
    platform: 'Misskey',
    url: 'https://mi.ruruke.moe/@ruru',
    icon: 'mdi-account-box'
  }
];

/**
 * Contact form state
 */
interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Form state
const formData = reactive<ContactForm>({
  name: '',
  email: '',
  message: ''
});

const submitted = ref(false);
const loading = ref(false);

/**
 * Handle form submission
 * Simulates an API call and resets the form on success
 */
function handleSubmit() {
  loading.value = true;

  // Simulate API call
  setTimeout(() => {
    loading.value = false;
    submitted.value = true;

    // Reset form
    formData.name = '';
    formData.email = '';
    formData.message = '';
  }, 1000);
}

/**
 * Reset form submission state
 */
function resetForm() {
  submitted.value = false;
}
</script>

<template>
  <v-card
    class="mx-auto my-8 contact-card fade-in"
    max-width="800"
    elevation="3"
    rounded="lg"
  >
    <v-card-title class="text-h3 text-center pt-6">
      お問い合わせ
    </v-card-title>

    <v-card-text>
      <!-- Success message after form submission -->
      <v-alert
        v-if="submitted"
        type="success"
        variant="tonal"
        class="mb-4"
        role="status"
        aria-live="polite"
      >
        メッセージを送信しました。ありがとうございます！
      </v-alert>

      <!-- Owner's Social Media Links -->
      <section class="social-links mb-6 text-center" aria-labelledby="social-media-heading">
        <h3 id="social-media-heading" class="text-subtitle-1 mb-3">以下のSNSまたはフォームよりご連絡ください。</h3>
        <div class="d-flex justify-center">
          <v-btn
            v-for="profile in socialMediaProfiles"
            :key="profile.platform"
            :href="profile.url"
            :aria-label="`${profile.platform}で連絡する`"
            target="_blank"
            rel="noopener noreferrer"
            icon
            class="mx-2 social-btn"
            color="primary"
          >
            <v-icon size="large">{{ profile.icon }}</v-icon>
          </v-btn>
        </div>
      </section>

      <!-- Contact Form -->
      <v-form @submit.prevent="handleSubmit" v-if="!submitted">
        <v-text-field
          v-model="formData.name"
          label="お名前"
          required
          variant="outlined"
          class="mb-4"
          aria-required="true"
        />

        <v-text-field
          v-model="formData.email"
          label="メールアドレス"
          type="email"
          required
          variant="outlined"
          class="mb-4"
          aria-required="true"
        />

        <v-textarea
          v-model="formData.message"
          label="メッセージ"
          required
          variant="outlined"
          rows="5"
          class="mb-4"
          aria-required="true"
        />

        <div class="text-center">
          <v-btn
            type="submit"
            color="primary"
            size="large"
            :loading="loading"
          >
            送信
          </v-btn>
        </div>
      </v-form>

      <!-- Reset form button after submission -->
      <div v-if="submitted" class="text-center mt-4">
        <v-btn
          color="primary"
          variant="text"
          @click="resetForm"
        >
          新しいメッセージを送信
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
/* CSS Variables and Card styling */
.contact-card {
  /* Color variables */
  --card-bg-color: rgba(255, 255, 255, 0.8);
  --shadow-color: rgba(0, 0, 0, 0.2);

  /* Animation variables */
  --transition-duration: 0.3s;
  --animation-duration: 0.7s;
  --hover-lift: -3px;

  /* Blur effect */
  --blur-amount: 10px;

  /* Card styling */
  background-color: var(--card-bg-color) !important;
  backdrop-filter: blur(var(--blur-amount));
}

/* Social media buttons styling */
.social-links {
  margin-bottom: 2rem;
}

.social-btn {
  transition: transform var(--transition-duration) ease, 
              box-shadow var(--transition-duration) ease;
}

.social-btn:hover {
  transform: translateY(var(--hover-lift));
  box-shadow: 0 4px 8px var(--shadow-color);
}

/* Animation classes */
.fade-in {
  opacity: 0.1;
  animation: fadeInEffect var(--animation-duration) ease-in-out forwards;
}

@keyframes fadeInEffect {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}
</style>
