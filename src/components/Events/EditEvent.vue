<template>
 <div>
    <h1>Edit Event</h1>
    <form v-on:submit.prevent = "editEvent">
        <p>title: <input type="text" v-model="event.title"></p>
        <p>description: <textarea v-model="event.description"></textarea></p>
        <p>location: <input type="text" v-model="event.location"></p>
        <p>date: <input type="datetime-local" v-model="event.date"></p>
        <p>organizer: <input type="text" v-model="event.organizer"></p>
        <p><button type="submit">edit event</button></p>
    </form>
    </div>

</template>

<script>
import EventsService from '../../services/EventsService';
export default {
  data(){
    return{
      event: null
    }
  },
  methods:{
    async editEvent(){
      await EventsService.put(this.event)
      this.$router.push({
                    name: 'events'
                })
    }
  },
  async created(){
    try{
      this.event = (await EventsService.show(this.$route.params.eventId)).data
      console.log('edit event: '+ this.event)
    }catch{
      console.log('error')
    }
  }
}
</script>

<style scoped>
</style>
