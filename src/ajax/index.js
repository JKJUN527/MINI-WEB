import axios from 'axios'
import qs from 'qs'
const TEST = 'test'
const PersonInfo = 'getpersoninfo/'
const GetVideo = 'getvideo/'
const ConversationList = 'getConversationList/'
const ConversationDetail = 'getConversationDetail/'
const sendMessage = 'sendMessage/'
const PushMessages = 'getPushMessages/'
const preference = 'preference/'
const Events = 'getevent/'
const Count = 'getCount/'
const DetectFace = 'detectface'

var ax = axios.create({
  baseURL: 'https://mini.jkjun.cn/',
  timeout: 1000
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


function getConversationDetail (data) {
  return makeGet(ConversationDetail, data)
}


function getPushMessages (data) {
  return makeGet(PushMessages, data)
}

function doSendMessage (data) {
  return makePost(sendMessage, data)
}

function sendPreference (data) {
  return makePost(preference, data)
}

function getEvent (data) {
  return makeGet(Events, data)
}

function getCount (data) {
  return makeGet(Count, data)
}

function doDetectFace (data) {
  return makePost(DetectFace, data)
}


export default {
  getPersonInfo,
  getVideo,
  getConversationList,
  getConversationDetail,
  getPushMessages,
  doSendMessage,
  sendPreference,
  getEvent,
  getCount
}
