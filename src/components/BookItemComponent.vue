<template>
  <div class="spinner" v-if="isLoading">Loading Books...</div>
  <div class="book-list-item" v-for="book in books" :key="book.id" v-if="!isLoading">
    <router-link :to="`book-details/${book.id}`">
      <div class="img-box">
        <img :src="book.coverImage" alt="Book cover" class="book-cover" />
      </div>
      <div class="book-info">
        <p class="sub-heading sub-heading--bold fnt-sb-01">{{ book.title }}</p>
        <p class="sub-heading fnt-sb-02">{{ book.authors?.join(', ') || 'Unknown Author' }}</p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType, watch } from 'vue'
import { fetchBooks } from '@/composables/getBooks'
import { useRouter } from 'vue-router'

export default defineComponent({
  props: {
    searchTerm: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const books = ref<any[]>([])
    const isLoading = ref(false)

    const getBooks = async (query: string) => {
      if (!query.trim()) {
        console.error('Search term is empty.')
        books.value = []
        return
      }

      try {
        isLoading.value = true
        const apiKey = 'YOUR_API_KEY'
        const fetchedBooks = await fetchBooks(query, apiKey)
        books.value = fetchedBooks
      } catch (error) {
        console.log(error)
        books.value = []
      } finally {
        isLoading.value = false
      }
    }
    watch(
      () => props.searchTerm,
      (newSearchTerm) => {
        getBooks(newSearchTerm)
      },
      { immediate: true },
    )

    const router = useRouter()
    const navigateTo = (id: string) => {
      router.push(`/book-details/${id}`)
    }
    return { books, isLoading, navigateTo }
  },
})
</script>

<style lang="scss" scoped>
.book-list-item {
  display: flex;
  flex-direction: column;

  .img-box {
    width: 100%;
    aspect-ratio: 2 / 3;
    overflow: hidden;

    .book-cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
  .book-info {
    margin-top: 1rem;
  }
}
</style>
