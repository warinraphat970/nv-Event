<template>
  <div>
    <h2>Get all books</h2>
    <p><button v-on:click="logout2()">Logout</button></p>
    <p><button v-on:click="navigateTo('/book/create')">สร้างผู้เขียน</button></p>
    <h4>จำนวนหนังสือ {{ books.length }}</h4>
    <div v-for="book in books" v-bind:key="book.id">
      <p>id: {{ book.id }}</p>
      <p>title: {{ book.title }}</p>
      <p>author: {{ book.author }}</p>
      <p>genre: {{ book.genre }}</p>
      <p>publishedYear: {{ book.publishedYear }}</p>
      <p><button v-on:click="navigateTo('/book/' + book.id)">ดูข้อมูลหนังสือ</button></p>
      <p><button v-on:click="navigateTo('/book/edit/' + book.id)">แก้ไขข้อมูล</button></p>
      <p><button v-on:click="deleteBook(book)">ลบข้อมูล</button></p>
      <hr>
    </div>
  </div>
</template>

<script>
import BooksService from '../../services/BooksService'
import { useAuthenStore } from '../../stores/authen'

export default {
  data() {
    return {
      books: []
    }
  },
  async created() {
    try {
      this.books = (await BooksService.index()).data
      console.log(this.books)
    } catch (error) {
      console.log(error)
    }
  },

  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteBook(book) {
      let result = confirm("Want to delete?")
      if (result) {
        try {
          await BooksService.delete(book)
          this.refreshData()
        } catch (err) {
          console.log(err)
        }
      }
    },
    async refreshData() {
      this.books = (await BooksService.index()).data
    },
    logout() {
      const authenStore = useAuthenStore()
      authenStore.logout()
      this.$router.push({
        name: 'login'
      })
    },
  },
};
</script>

<style scoped>
</style>
