<template>
  <div>
    <h2>Get all events</h2>
    <p><button v-on:click="logout2()">Logout</button></p>
    <p><button v-on:click="navigateTo('/event/create')">สร้างอีเวนต์</button></p>
    <h4>จำนวนอีเวนต์ {{ events.length }}</h4>
    <div v-for="event in events" v-bind:key="event.id">
      <p>id: {{ event.id }}</p>
      <p>title: {{ event.title }}</p>
      <p>description: {{ event.description }}</p>
      <p>location: {{ event.location }}</p>
      <p>date: {{ event.date }}</p>
      <p>organizer: {{ event.organizer }}</p>
      <p><button v-on:click="navigateTo('/event/' + event.id)">ดูข้อมูลอีเวนต์</button></p>
      <p><button v-on:click="navigateTo('/event/edit/' + event.id)">แก้ไขข้อมูล</button></p>
      <p><button v-on:click="deleteEvent(event)">ลบข้อมูล</button></p>
      <hr>
    </div>
  </div>
</template>

<script>
import EventsService from '../../services/EventsService'
import { useAuthenStore } from '../../stores/authen'

export default {
  data() {
    return {
      events: []
    }
  },
  async created() {
    try {
      this.events = (await EventsService.index()).data
      console.log(this.events)
    } catch (error) {
      console.log(error)
    }
  },

  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteEvent(event) {
      let result = confirm("Want to delete?")
      if (result) {
        try {
          await EventsService.delete(event)
          this.refreshData()
        } catch (err) {
          console.log(err)
        }
      }
    },
    async refreshData() {
      this.events = (await EventsService.index()).data
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
