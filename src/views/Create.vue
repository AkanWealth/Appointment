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
        <textarea
          type="text"
          class="form-control"
          placeholder="Drop a message..."
          v-model="book_appoint"
          rows="3"
        ></textarea>
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
      fname: '',
      email: '',
      mobile: '',
      book_appoint: ''
    }
  },
  methods: {
    async submit () {
      try {
        const response = await axios.post('apointments', {
          fname: this.fname,
          email: this.email,
          mobile: this.mobile,
          book_appoint: this.book_appoint
        })

        localStorage.setItem('token', response.data.token)
        // this.$store.dispatch('users', response.data.user)
        console.log(response)
        this.$router.push('/')
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
