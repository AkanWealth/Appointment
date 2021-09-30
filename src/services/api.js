import axios from 'axios'

axios.defaults.baseURL = 'https://appointment202.herokuapp.com/' /* 'http://localhost:3000/' */

axios.defaults.headers.common.Authorization =
    'Bearer ' + localStorage.getItem('token')