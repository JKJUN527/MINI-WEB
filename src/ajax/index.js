import axios from 'axios'
import qs from 'qs'
const LOGIN = '/'
var ax = axios.create({
  baseURL: 'http://111.231.233.254:8012',
  timeout: 1000
})

function makePost (path, data) {
  return ax.post(path, qs.stringify(data))
}

function makeGet (path, params) {
  return ax.get(path, { params })
}

function login (data) {
  return makeGet(LOGIN, data)
}

export default {
  makePost,
  makeGet,
  login
}
