<template>
  <div class="hello">
    <h1>Welcome User</h1>

    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/view-user" class="nav-link active"
          >View User</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/view-appointment" class="nav-link"
          >View Appointment</router-link
        >
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <div class="table">
      <table class="table table-striped">
        <thead>
          <tr>
            <th style="font-size: 1.5rem">First Name</th>
            <th style="font-size: 1.5rem">Last Name</th>
            <th style="font-size: 1.5rem">Email Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in users" :key="n.user_id">
            <td>{{ n.first_name }}</td>
            <td>{{ n.last_name }}</td>
            <td>{{ n.email }}</td>
            <button type="button" class="btn btn-primary" @click="remove(n.user_id)">
              Remove
            </button>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div v-else>You don have access to this page</div> -->
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'ViewUser',
  props: {
    msg: String
  },
  data () {
    return {}
  },
  async created () {
    const response = await axios.get('users')

    // if (localStorage.getItem === null) {
    //   this.$router.push('/login')
    // }
    this.$store.dispatch('users', response.data)
  },
  computed: {
    ...mapGetters(['users'])
  },
  methods: {
    // remove (user_id) {
    //   axios.delete(`users/${user_id}`)
    //   this.$store.dispatch('users', user_id)

    // },
    async remove (id) {
      if (confirm('Are you sure you want to delete this appointment?')) {
        await axios.delete(`users/${id}`)
        this.$store.dispatch('user')
        location.reload()
        this.$route.push('/admin')
      } else {
        return false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
