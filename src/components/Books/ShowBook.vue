<template>
  <div>
    <h1>Show Book</h1>
    <p>Book ID: {{ this.book.id }}</p>
    <p>Title: {{ this.book.title }}</p>
    <p>Author: {{ this.book.author }}</p>
    <p>Genre: {{ this.book.genre }}</p>
    <p>Published Year: {{ this.book.publishedYear }}</p>
  </div>
</template>

<script>
import BooksService from '../../services/BooksService'
export default {
  data () {
    return {
      book: null
    }
  },
  async created () {
    var bookId = this.$route.params.bookId 
    this.book = (await BooksService.show(bookId)).data
    console.log("created bookId:", this.book)
  },
}
</script>

<style scoped>
</style>
