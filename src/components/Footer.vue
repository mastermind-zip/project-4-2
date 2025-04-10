<template>
  <footer>
    <div class="container">
      <div class="subscribe-box">
        <div class="text-box">
          <p class="sub-heading fnt-sb-01">Join our newsletter</p>
          <p class="sub-heading fnt-sb-02">Stay updated with the latest news and offers.</p>
        </div>
        <div class="subscription">
          <input type="email" placeholder="Enter your email" />
          <button class="cta-btn">Subscribe</button>
        </div>
      </div>
      <div class="footer-navigation">
        <div class="logo">
          <img src="../assets/images/logo-img.png" alt="" class="logo-img" />
        </div>
        <div class="footer-nav">
          <ul class="footer-nav-list">
            <li><router-link to="/">Home Page</router-link></li>
            <li><router-link to="/">About Us</router-link></li>
            <li><router-link to="/">Contact Us</router-link></li>
          </ul>
        </div>
        <div class="footer-nav">
          <ul class="footer-nav-list">
            <li><router-link to="/">Welcome!</router-link></li>
            <li><router-link to="/">Features</router-link></li>
            <li><router-link to="/">How It Works</router-link></li>
            <li><router-link to="/">Benefits</router-link></li>
          </ul>
        </div>
      </div>
      <div class="footer-baseline">
        <p class="sub-heading fnt-sb-02">© 2025 Relume. All rights reserved.</p>
        <router-link to="/" class="footer-link fnt-sb-02">Privacy policy</router-link>
        <router-link to="/" class="footer-link fnt-sb-02">Terms of Service</router-link>
        <router-link to="/" class="footer-link fnt-sb-02">Cookies Settings</router-link>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;

.container {
  padding: 5rem 4rem;
}

.subscribe-box {
  display: flex;
  justify-content: space-between;

  .fnt-sb-01 {
    font-weight: 600;
  }
  .subscription {
    input {
      min-width: 16rem;
      padding: 0.5rem 0.75rem;
      border-radius: 0.75rem;
      outline: 1px solid rgba($color: #000000, $alpha: 0.15);
      margin-right: 1rem;
    }
  }
}

.footer-navigation {
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .logo {
    &-img {
      width: 20%;
    }
  }
  .footer-nav {
    &-list {
      display: grid;
      gap: 2rem;

      li {
        font-size: 1rem;
        font-family: $body-font;
      }
    }
  }
}

.footer-baseline {
  padding: 2rem 0;
  border-top: 1px solid rgba($color: #000000, $alpha: 0.15);
  display: flex;
  gap: 1.5rem;

  .footer-link {
    text-decoration: underline;
  }
}
</style>
