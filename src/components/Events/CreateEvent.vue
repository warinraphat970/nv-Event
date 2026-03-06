<template>
    <div>
        <h1>Create Event</h1>
        <form v-on:submit.prevent = "createEvent">
            <p>title: <input type="text" v-model="event.title"></p>
            <p>description: <textarea v-model="event.description"></textarea></p>
            <p>location: <input type="text" v-model="event.location"></p>
            <p>date: <input type="datetime-local" v-model="event.date"></p>
            <p>organizer: <input type="text" v-model="event.organizer"></p>
            <p><button type="submit">create event</button></p>
        </form>
    </div>
</template>

<script>
import EventsService from '../../services/EventsService'

export default {
    data () {
        return {
            event: {
                title: '',
                description: '',
                location: '',
                date: null,
                organizer: ''
            }
        }
    },
    methods: {
        async createEvent () {
            try {
                await EventsService.post(this.event)
                this.$router.push({
                    name: 'events'
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
