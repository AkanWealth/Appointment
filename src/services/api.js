import axios from 'axios'

// axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://appointment202.herokuapp.com/'
axios.defaults.baseURL = 'https://blue-force.herokuapp.com/'

// axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common.Authorization =
    'Bearer ' + localStorage.getItem('token')
