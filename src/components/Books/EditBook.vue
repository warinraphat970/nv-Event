<template>
 <div>
    <h1>Edit Book</h1>
    <form v-on:submit.prevent = "editBook">
        <p>title: <input type="text" v-model="book.title"></p>
        <p>author: <input type="text" v-model="book.author"></p>
        <p>genre: <input type="text" v-model="book.genre"></p>
        <p>publishedYear: <input type="number" v-model="book.publishedYear"></p>
        <p><button type="submit">edit book</button></p>
    </form>
    </div>

</template>

<script>
import BooksService from '../../services/BooksService';
export default {
  data(){
    return{
      book: null
    }
  },
  methods:{
    async editBook(){
      await BooksService.put(this.book)
      this.$router.push({
                    name: 'books'
                })
    }
  },
  async created(){
    try{
      this.book = (await BooksService.show(this.$route.params.bookId)).data
      console.log('edit book: '+ this.book)
    }catch{
      console.log('error')
    }
  }
}
</script>

<style scoped>
</style>
