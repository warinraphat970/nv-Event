<template>
  <div>
    <h1>Show Event</h1>
    <p>Event ID: {{ this.event.id }}</p>
    <p>Title: {{ this.event.title }}</p>
    <p>Description: {{ this.event.description }}</p>
    <p>Location: {{ this.event.location }}</p>
    <p>Date: {{ this.event.date }}</p>
    <p>Organizer: {{ this.event.organizer }}</p>
  </div>
</template>

<script>
import EventsService from '../../services/EventsService'
export default {
  data () {
    return {
      event: null
    }
  },
  async created () {
    var eventId = this.$route.params.eventId 
    this.event = (await EventsService.show(eventId)).data
    console.log("created eventId:", this.event)
  },
}
</script>

<style scoped>
</style>
