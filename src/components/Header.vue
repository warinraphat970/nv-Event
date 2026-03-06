<template>
  <div >
    <div class="nv-navbar">
      <ul class="nav">
        <li v-for="menu in menus" :key="menu.name">
          <router-link :to="{name: menu.routeName}">{{ menu.label }}</router-link>
        </li>
        <li><router-link :to="{name: 'login'}">Login</router-link></li>
      </ul>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { name: 'users', label: 'Users', routeName: 'users' },
        { name: 'blogs', label: 'Blogs', routeName: 'blogs' },
        { name: 'events', label: 'Events', routeName: 'events' }
      ]
    }
  }
}
</script>
<style scoped>
    .nv-navbar {
        background-color:palegoldenrod;
        width: 100%;
        padding: 10px 0px 10px 0px;
    }
    .nv-navbar .nav {
        list-style: none;
        margin:0;
        padding:0;
        float:left;
    }
    .nv-navbar .nav li {
        float:left;
    }
    .nv-navbar .nav li a {
        padding: 10px;
        text-decoration: none;
        color:gray;
        font-weight: bold;
    }
    .nv-navbar .nav li a:hover {
        padding: 10px;
        text-decoration: none;
        color:darkslategrey;
    }
    .nv-navbar .nav li a.router-link-active {
        background-color:gold;
        color:darkslategrey;
    }
    .clearfix {
        clear: left;
    }
</style>