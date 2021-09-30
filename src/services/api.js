import axios from 'axios'

// axios.defaults.baseURL = 'https://appointment202.herokuapp.com/' /* 'http://localhost:3000/' */
//set access control allow origin to allow cross origin requests
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://appointment202.herokuapp.com/'
axios.defaults.headers.common.Authorization =
    'Bearer ' + localStorage.getItem('token')
