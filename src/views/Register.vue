<template>
  <div class="container">
    <form class="col-md-6">
      <h3>Register</h3>
      <div class="md-6 mb-5">
        <input
          type="first_name"
          class="form-control"
          placeholder="First Name"
          v-model="first_name"
        />
      </div>
      <div class="md-6 mb-5">
        <input
          type="last_name"
          class="form-control"
          placeholder="Last Name"
          v-model="last_name"
        />
      </div>
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
        Submit
      </button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async submit () {
      try {
        const response = await axios.post('register', {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password
        })

        localStorage.setItem('token', response.data.token)
        this.$router.push('/login')
      } catch (error) {
        this.error = 'Invalid Email or Password'
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
