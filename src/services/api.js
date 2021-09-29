import axios from 'axios'

axios.defaults.baseURL = /* 'http://localhost:3000/' */ 'https://appointment202.herokuapp.com/'

axios.defaults.headers.common.Authorization =
    'Bearer ' + localStorage.getItem('token')
