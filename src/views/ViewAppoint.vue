<template>
  <div class="hello">
    <h1>Welcome User</h1>

    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/view-user" class="nav-link">View User</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/view-appointment" class="nav-link active"
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
            <th style="font-size: 1.5rem">Full Name</th>
            <th style="font-size: 1.5rem">Email</th>
            <th style="font-size: 1.5rem"> Phone Number</th>
            <th style="font-size: 1.5rem">Message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in appointment" :key="n.id">
            <td>{{ n.fname }}</td>
            <td>{{  n.email }}</td>
            <td>{{ n.mobile }}</td>
            <td>{{ n.book_appoint }}</td>
            <!-- <v-btn text depressed color="primary" @click="remove">
              Remove
            </v-btn> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'ViewAppoint',
  props: {
    msg: String
  },
  data () {
    return {}
  },
  async created () {
    const response = await axios.get('appointment')

    if (localStorage.getItem === null) {
      this.$router.push('/login')
    }
    this.$store.dispatch('appointment', response.data)
    console.log(this.$store.getters.appointment)
  },
  computed: {
    ...mapGetters(['appointment'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
}
</style>
