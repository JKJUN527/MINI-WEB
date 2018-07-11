import axios from 'axios'
import qs from 'qs'
const LOGIN = '/'
const PersonInfo = 'getpersoninfo'
const GetVideo = 'getvideo'
var ax = axios.create({
  baseURL: 'http://mini.jkjun.cn/',
  timeout: 1000
})

function makePost (path, data) {
  return ax.post(path, qs.stringify(data))
}

function makeGet (path, params) {
  return ax.get(path, { params })
}

function getPersonInfo (data) {
  return makeGet(PersonInfo, data)
}

function getVideo (data) {
  return makeGet(GetVideo, data)
}

export default {
  makePost,
  makeGet,
  getPersonInfo,
  getVideo
}
