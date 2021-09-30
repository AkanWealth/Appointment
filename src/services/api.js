import axios from 'axios'

// axios.defaults.baseURL = 'https://appointment202.herokuapp.com/' /* 'http://localhost:3000/' */

// cors proxy for heroku server to allow cross origin requests from client side to heroku server
axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://appointment202.herokuapp.com/'
axios.defaults.headers.common.Authorization =
    'Bearer ' + localStorage.getItem('token')
