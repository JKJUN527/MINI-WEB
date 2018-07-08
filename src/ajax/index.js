import axios from 'axios'
import qs from 'qs'
var ax = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000
})

function makePost(path, data) {
  return ax.post(path, qs.stringify(data))
}

function makeGet(path, params) {
  return ax.get(path, { params })
}

export default {
  makePost,
  makeGet
}
