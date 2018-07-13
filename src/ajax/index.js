import axios from 'axios'
import qs from 'qs'
const TEST = 'test'
const PersonInfo = 'getpersoninfo'
const GetVideo = 'getvideo'
const ConversationList = 'getConversationList'
const ConversationDetail = 'getConversationDetail'
const sendMessage = 'sendMessage'

var ax = axios.create({
  // baseURL: 'http://mini.jkjun.cn/',
  baseURL: 'http://localhost:3000/',
  // withCredentials: true
})

function makePost (path, data) {
  return ax.post(path, qs.stringify(data))
}

function makeGet (path, params) {
  return ax.get(path, { params })
}

function Test (data) {
  return makeGet(TEST, data)
}

function getPersonInfo (data) {
  return makeGet(PersonInfo, data)
}

function getVideo (data) {
  return makeGet(GetVideo, data)
}

function getConversationList (data) {
  return makeGet(ConversationList, data)
}

export default {
  makePost,
  makeGet,
  Test,
  getPersonInfo,
  getVideo,
  getConversationList
}
