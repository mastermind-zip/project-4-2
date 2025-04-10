<template>
  <Navbar />
  <section class="hero-section">
    <div class="hero">
      <div class="heading-container">
        <h1 class="heading heading--light fnt-hd-01">Discover Your Next Favorite Book or Movie</h1>
        <p class="sub-heading sub-heading--light fnt-sb-01">
          Welcome to our platform where you can easily search for books and movies tailored to your
          interests. Join our community to share your thoughts and recommendations!
        </p>
      </div>
      <div class="cta-btn-container">
        <button class="cta-btn filled" @click="navigateTo('books-overview')">Explore</button>
        <button class="cta-btn">Review</button>
      </div>
    </div>
  </section>
  <section class="features-section">
    <div class="container">
      <p class="tagline">Discover</p>
      <div class="heading-container">
        <h1 class="heading heading--dark fnt-hd-02">Explore Our Exciting Features Today!</h1>
        <p class="sub-heading sub-heading--dark fnt-sb-01">
          Dive into a world of entertainment with our powerful search tools. Whether you're looking
          for books or movies, we have you covered.
        </p>
      </div>
      <div class="features-list grid-3-block">
        <div class="feature-item feature-item--center">
          <span class="material-symbols-outlined">search</span>
          <div class="heading-container">
            <h1 class="heading heading--dark fnt-hd-03">
              Search for Your Favorite Books Effortlessly
            </h1>
            <p class="sub-heading sub-heading--dark fnt-sb-02">
              Find your next great read with ease.
            </p>
          </div>
        </div>
        <div class="feature-item feature-item--center">
          <span class="material-symbols-outlined"> book_5 </span>

          <div class="heading-container">
            <h1 class="heading heading--dark fnt-hd-03">Discover Movies That Match Your Taste</h1>
            <p class="sub-heading sub-heading--dark fnt-sb-02">
              Uncover films that resonate with your interests.
            </p>
          </div>
        </div>
        <div class="feature-item feature-item--center">
          <span class="material-symbols-outlined"> reviews </span>
          <div class="heading-container">
            <h1 class="heading heading--dark fnt-hd-03">Share Your Thoughts with User Reviews</h1>
            <p class="sub-heading sub-heading--dark fnt-sb-02">
              Join our community and leave your feedback.
            </p>
          </div>
        </div>
      </div>
      <div class="cta-btn-container">
        <button class="cta-btn">Learn More</button>
        <button class="cta-btn not-filled">Sign Up ></button>
      </div>
    </div>
  </section>
  <section class="how-it-works-section">
    <div class="container">
      <p class="tagline">Discover</p>
      <div class="heading-container">
        <h1 class="heading heading--dark fnt-hd-02">Easily Search for Your Favorite Titles</h1>
        <p class="sub-heading sub-heading--dark fnt-sb-01">
          Searching for books or movies has never been easier. Follow our simple steps to find
          exactly what you're looking for in no time.
        </p>
      </div>
      <div class="features-list grid-3-block">
        <div class="feature-item">
          <span class="material-symbols-outlined"> deployed_code </span>
          <div class="heading-container">
            <h1 class="heading heading--dark fnt-hd-03">Step 1: Use the Search Bar</h1>
            <p class="sub-heading sub-heading--dark fnt-sb-02">
              Type in the title or keywords related to your desired book or movie.
            </p>
          </div>
        </div>
        <div class="feature-item">
          <span class="material-symbols-outlined"> deployed_code </span>
          <div class="heading-container">
            <h1 class="heading heading--dark fnt-hd-03">Step 2: Browse the Results</h1>
            <p class="sub-heading sub-heading--dark fnt-sb-02">
              Review the list of results and find your match.
            </p>
          </div>
        </div>
        <div class="feature-item">
          <span class="material-symbols-outlined"> deployed_code </span>
          <div class="heading-container">
            <h1 class="heading heading--dark fnt-hd-03">Step 3: Leave Your Feedback</h1>
            <p class="sub-heading sub-heading--dark fnt-sb-02">
              Share your thoughts to help others in their search.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="benefits-section">
    <div class="container grid-2-block">
      <div class="benefits-list">
        <div class="heading-container">
          <h1 class="heading fnt-hd-04">
            Discover the ultimate platform for finding and reviewing books and movies.
          </h1>
          <p class="sub-heading fnt-sb-01">
            Our extensive database offers a wealth of information at your fingertips. Enjoy a
            seamless experience with personalized recommendations tailored just for you.
          </p>
        </div>
        <div class="list-item">
          <div class="heading-container">
            <h1 class="heading fnt-hd-05">Comprehensive Database</h1>
            <p class="sub-heading fnt-sb-02">
              Access a vast collection of books and movies in one convenient location.
            </p>
          </div>
          <div class="heading-container">
            <h1 class="heading fnt-hd-05">User-Friendly</h1>
            <p class="sub-heading fnt-sb-02">
              Navigate effortlessly with our intuitive interface designed for all users.
            </p>
          </div>
        </div>
      </div>
      <div class="img-container">
        <img src="../assets/images/image-book.jpg" alt="" />
      </div>
    </div>
  </section>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'HomeView',
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const router = useRouter()

    const navigateTo = (path: string) => {
      router.push(`${path}`)
    }
    return {
      navigateTo,
    }
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;

.hero-section {
  min-height: 110vh;
  display: grid;
  background:
    linear-gradient(rgba(0, 0, 0, 0.529), rgba(0, 0, 0, 0.529)),
    url('../assets/images/hero-section-image.jpg') no-repeat center / cover;
}

.hero {
  align-self: center;
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.features-section {
  background-color: $cta-color-003;
  text-align: center;
  .container {
    display: grid;

    .heading-container {
      justify-self: center;
    }
  }
}

.features-list {
  padding: 5rem 0;

  .feature-item {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;

    &--center {
      justify-items: center;
    }
  }
  .material-symbols-outlined {
    font-size: 3rem;
  }
}

.benefits-section {
  background-color: $cta-color-003;

  .container {
    .benefits-list {
      align-self: center;
      .heading-container {
        margin-bottom: 2rem;
      }
      .list-item {
        display: flex;
        gap: 1.5rem;
      }
    }
  }
}
</style>
