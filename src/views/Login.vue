<template>
  <div class="container">
    <form class="col-md-6">
      <h3>Login</h3>
      <div class="mb-3 mb-5">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="submit">
        Login
      </button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async submit () {
      try {
        // check if user has role admin

        const response = await axios.post('login', {
          email: this.email,
          password: this.password
        })
        if (response.data.data.role_id === 1) {
          localStorage.setItem('token', response.data.token)
          this.$store.dispatch('users', response.data.user)
          console.log(response)
          this.$router.push('/admin')
          location.reload()
        } else {
          localStorage.setItem('token', response.data.token)
          this.$store.dispatch('users', response.data.user)
          console.log(response)
          this.$router.push('/')
        }
        // location.reload()
      } catch (error) {
        this.error = 'Invalid request'
        console.log(this.error)
      }
    }
  }
}
</script>
<style scoped>
form {
  margin-top: 7rem;
}
</style>
