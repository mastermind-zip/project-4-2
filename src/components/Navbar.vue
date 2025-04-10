<template>
  <nav>
    <div class="nav-bar">
      <div class="nav-container">
        <img src="../assets/images/logo-img.png" alt="Company logo image" class="logo-img" />
        <ul class="link-list">
          <li class="list-item"><router-link to="/">Home page</router-link></li>
          <li class="list-item"><router-link to="/">About us</router-link></li>
          <li class="list-item"><router-link to="/">Contact us</router-link></li>
          <li class="list-item"><router-link to="/">More links</router-link></li>
        </ul>
      </div>
      <div class="cta-btn-container">
        <button class="cta-btn">Join</button>
        <button class="cta-btn filled" @click="navigateTo">Start</button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    const navigateTo = () => {
      router.push('/books-overview')
    }
    return {
      navigateTo,
    }
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/main.scss';

nav {
  max-width: 90rem;
  padding: 1rem 4rem;
  margin: 0 auto;

  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-container {
      display: flex;
      gap: 1.5rem;

      .logo-img {
        max-width: 10%;
      }

      .link-list {
        display: flex;
        align-items: center;
        gap: 2rem;

        .list-item {
          font-size: 1rem;
          pointer-events: all;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
