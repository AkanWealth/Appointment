import axios from 'axios'
// import authorization from '../../../server/middlewares/authorization'

// axios.defaults.baseURL = 'https://appointment202.herokuapp.com/' /* 'http://localhost:3000/' */
// set access control allow origin to allow cross origin requests
axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://appointment202.herokuapp.com/'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// authorization middleware for all requests to the api
// authorization header is set to the token in the local storage
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
// axios.defaults.headers.common.Authorization =
//     'Bearer ' + localStorage.getItem('token')
