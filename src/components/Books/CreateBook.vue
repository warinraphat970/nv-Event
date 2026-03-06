<template>
    <div>
        <h1>Create Book</h1>
        <form v-on:submit.prevent = "createBook">
            <p>title: <input type="text" v-model="book.title"></p>
            <p>author: <input type="text" v-model="book.author"></p>
            <p>genre: <input type="text" v-model="book.genre"></p>
            <p>publishedYear: <input type="number" v-model="book.publishedYear"></p>
            <p><button type="submit">create book</button></p>
        </form>
    </div>
</template>

<script>
import BooksService from '../../services/BooksService'

export default {
    data () {
        return {
            book: {
                title: '',
                author: '',
                genre: '',
                publishedYear: null
            }
        }
    },
    methods: {
        async createBook () {
            try {
                await BooksService.post(this.book)
                this.$router.push({
                    name: 'books'
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
<style scoped>
</style>
