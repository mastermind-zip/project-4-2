<template>
  <Navbar />
  <section class="page-title-section">
    <div class="container">
      <div class="page-title grid-2-block center">
        <h1 class="heading fnt-hd-01">Discover Your Next Favorite Book Today</h1>
        <div class="sub-heading">
          <p class="sub-heading fnt-sb-01">
            Dive into our extensive collection of books tailored to every taste and interest. Start
            searching now and find the perfect read that speaks to you!
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="books-explore-section">
    <div class="container">
      <p class="tagline">Explore</p>
      <div class="product-title">
        <div class="heading-container">
          <h1 class="heading fnt-hd-02">Books</h1>
          <p class="sub-heading fnt-sb-01">Discover our diverse collection of captivating reads.</p>
        </div>
        <div class="search-bar">
          <input type="text" v-model="searchTerm" placeholder="Search for a book by the title" />
        </div>
      </div>
      <div class="books-list">
        <BookItem :search-term="searchTerm" />
      </div>
    </div>
  </section>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import BookItem from '@/components/BookItemComponent.vue'
import { useSearchStore } from '@/stores/searchStore'

export default defineComponent({
  name: 'BooksView',
  components: {
    Navbar,
    Footer,
    BookItem,
  },
  setup() {
    const store = useSearchStore()
    const searchTerm = ref(store.searchTerm)

    watch(searchTerm, (newVal) => {
      store.setSearchTerm(newVal)
    })

    return {
      searchTerm,
    }
  },
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;
.books-explore-section {
  background-color: $cta-color-002;
  .product-title {
    display: flex;
    justify-content: space-between;
    align-items: end;

    .search-bar {
      display: flex;
      gap: 1rem;
      input {
        min-width: 25rem;
        padding: 0.5rem 0.75rem;
        border-radius: 0.75rem;
        outline: 1px solid rgba($color: #000000, $alpha: 0.15);
      }
    }
  }
  .books-list {
    padding-top: 5rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 2rem;
    row-gap: 4rem;
  }
}
</style>
