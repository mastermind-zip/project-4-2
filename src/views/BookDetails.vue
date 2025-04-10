<template>
  <Navbar />
  <section class="about-book-section">
    <div class="container">
      <div class="heading-container">
        <h1 class="heading fnt-hd-01">{{ book?.title }}</h1>
        <p class="sub-heading fnt-sb-01" v-for="(author, index) in book?.authors" :key="index">
          {{ author }}
        </p>
      </div>
      <div class="genres-list">
        <div
          class="genre-tag sub-heading--bold"
          v-for="(category, index) in book?.categories"
          :key="index"
        >
          {{ category }}
        </div>
      </div>
      <div class="book-description">
        <p class="sub-heading fnt-sb-01" v-html="book?.description"></p>
      </div>
      <div class="cta-btn-container">
        <button class="cta-btn filled">Add to reading list</button>
        <button class="cta-btn">Share a review</button>
      </div>
    </div>
  </section>
  <section class="readers-review-section">
    <div class="container">
      <div class="heading-container">
        <h1 class="heading fnt-hd-02">Reviews</h1>
        <p class="sub-heading fnt-sb-01">This book changed my perspective on life!</p>
      </div>
      <div class="reviews-box">
        <h1 class="heading fnt-hd-05">"An absolute must-read for anyone seeking inspiration."</h1>
        <div class="review-author">
          <p class="sub-heading sub-heading--bold fnt-sb-02">Jana Doe</p>
          <p class="sub-heading">Author, Book Club</p>
        </div>
      </div>
      <div class="reviews-box">
        <h1 class="heading fnt-hd-05">"A captivating story that resonates deeply with readers."</h1>
        <div class="review-author">
          <p class="sub-heading sub-heading--bold fnt-sb-02">John Smith</p>
          <p class="sub-heading">Editor, Publishing House</p>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { fetchBook } from '@/composables/getBook'
import { useRoute } from 'vue-router'

interface Book {
  id: string
  title: string
  authors?: string[]
  coverImage: string
  categories?: string[]
  description?: string
  publisher?: string
  publishedDate?: string
}

export default defineComponent({
  props: ['id'],
  components: {
    Navbar,
    Footer,
  },
  setup(props) {
    const book = ref<Book | null>(null)
    const route = useRoute()

    onMounted(async () => {
      const id = route.params.id as string
      book.value = await fetchBook(id)
    })
    return { book }
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;

.about-book-section {
  .container {
    display: grid;
    justify-items: center;
    .heading-container {
      text-align: center;
    }
    .genres-list {
      margin: 1.5rem 7rem 0 7rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;

      .genre-tag {
        border-radius: 6px;
        padding: 0.25rem 0.625rem;
        border: 1px solid rgba($color: #000000, $alpha: 0.15);
        background-color: $cta-color-002;
        text-align: center;
        font-size: 0.875rem;
      }
    }
    .book-description {
      margin: 3rem 6.25rem;
      display: grid;
      row-gap: 2.5rem;
      .sub-heading {
        line-height: 200%;
      }
    }
  }
}

.readers-review-section {
  .container {
    display: grid;
    row-gap: 5rem;
    grid-template-columns: repeat(2, 1fr);

    .heading-container {
      grid-column: 1 / -1;
    }
  }
}
</style>
