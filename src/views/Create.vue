<template>
  <div class="container">
    <form class="col-md-6">
      <h3>Drop your appointment here</h3>
      <div class="md-6 mb-5">
        <input
          type="fullName"
          class="form-control"
          placeholder="Full Name"
          v-model="fname"
        />
      </div>
      <div class="md-6 mb-5">
        <input
          type="email"
          class="form-control"
          placeholder="Last Name"
          v-model="email"
        />
      </div>
      <div class="mb-3 mb-5">
        <input
          type="email"
          class="form-control"
          placeholder="Phone Number"
          v-model="mobile"
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Password"
          v-model="book_appoint"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      fname: '',
      email: '',
      mobile: '',
      book_appoint: ''
    }
  },
  methods: {
    async submit () {
      try {
        const response = await axios.post('appointment', {
          fname: this.fname,
          email: this.email,
          mobile: this.mobile,
          book_appoint: this.book_appoint
        })

        localStorage.setItem('token', response.data.token)
        // this.$store.dispatch('users', response.data.user)
        console.log(response)
        this.$router.push('/about')
        // location.reload()
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
