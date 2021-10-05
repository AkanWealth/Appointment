import axios from 'axios'

axios.defaults.baseURL = /* 'http://localhost:5000/' */ 'https://blue-force.herokuapp.com/'

axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common.Authorization =
    'Bearer ' + localStorage.getItem('token')
