<template>
  <div class="hello">
    <h1>User List</h1>
    <div class="table">
      <table class="table table-striped">
        <thead>
          <tr>
            <th style="font-size: 1.5rem">Full Name</th>
            <th style="font-size: 1.5rem">Email</th>
            <th style="font-size: 1.5rem">Phone Number</th>
            <th style="font-size: 1.5rem">Message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in appointment" :key="n.id">
            <td>{{ n.fname }}</td>
            <td>{{ n.email }}</td>
            <td>{{ n.mobile }}</td>
            <td>{{ n.book_appoint }}</td>
            <button type="button" class="btn btn-primary" @click="remove(n.id)">
              Remove
            </button>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row be-datatable-footer">
      <div class="col-sm-5">
        <div class="dataTables_info">{{ meta.total }} entries</div>
      </div>
      <div class="col-sm-7">
        <div class="dataTables_paginate paging_simple_numbers">
          <ul class="pagination">
            <li>
              <a href="#" class="page-link" @click.prevent="previous">Previous</a>
            </li>
            <li>
              <a href="#" class="page-link" @click.prevent="next">Next</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      meta: {
        page: 1,
        limit: 10,
        total: 0,
        pages: 0,
        next: false,
        previous: false
      }
    }
  },
  async created () {
    const appointment = await axios.get(
      'appointment' + '?page=' + this.meta.page + '&limit=' + this.meta.limit
    )
    console.log(this.$store.getters.appointment)
    console.log(appointment.data.meta)
    if (appointment.data.meta) {
      this.meta = appointment.data.meta
      return this.$store.dispatch('appointment', appointment.data.meta.data)
    }
  },
  computed: {
    ...mapGetters(['appointment'])
  },
  methods: {
    async remove (id) {
      if (confirm('Are you sure you want to delete this appointment?')) {
        await axios.delete('appointment/' + id)
        this.$store.dispatch('appointment')
        location.reload()
        this.$rounte.push('/admin')
      } else {
        return false
      }
    },
    next () {
      if (this.meta.next !== null) {
        this.meta.page += 1
        this.search()
      } else {
        return false
      }
    },
    previous () {
      if (this.meta.page > 1) {
        this.meta.page -= 1
        this.search()
      } else {
        return alert('That the last page')
      }
    },
    async search () {
      const appointment = await axios.get(
        'appointment' + '?page=' + this.meta.page + '&limit=' + this.meta.limit
      )
      if (appointment.data.meta) {
        this.meta = appointment.data.meta
        return this.$store.dispatch('appointment', appointment.data.meta.data)
      }
    }
  }
}
</script>

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
.btn {
  color: blue;
}
</style>
