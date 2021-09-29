<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Tech</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" v-if="!users">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">Sign Up</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Create an Appointment</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto" v-if="users">
        <li class="nav-item">
          <a href="javascript:void(0)" class="nav-link" @click="logout">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$store.dispatch('users', null)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters(['users'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: primary;
}
.text-decoration-none {
  font-size: 2rem;
}
#navbarNav{
  justify-content: end;
}
</style>
