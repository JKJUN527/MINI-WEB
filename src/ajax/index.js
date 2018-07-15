import axios from 'axios'
import qs from 'qs'
const PersonInfo = 'getpersoninfo/'
const OtherPerson = 'getotherpersoninfo/'
const GetVideo = 'getvideo/'
const ConversationList = 'getConversationList/'
const ConversationDetail = 'getConversationDetail/'
const sendMessage = 'sendMessage/'
const PushMessages = 'getPushMessages/'
const preference = 'preference/'
const Events = 'getevent/'
const Count = 'getCount/'
const DetectFace = 'detectface/'
const PersonEdit = 'editpersoninfo/'
const uploadVideo = 'uploadvideo/'
const Login = 'isloggedin/'
// const  = 'editpersoninfo/'

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

function uploadFile(path, data) {
  return ax.post(path, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
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
  return uploadFile(DetectFace, data)
}

function doPersonEdit (data) {
  return uploadFile(PersonEdit, data)
}

function getOtherInfo (data) {
  return makePost(OtherPerson, data)
}
 
function doUploadVideo (data) {
  return uploadFile(uploadVideo, data)
}

function isLogin (data) {
  return makeGet(Login, data)
}

export default {
  isLogin,
  getPersonInfo,
  getVideo,
  getConversationList,
  getConversationDetail,
  getPushMessages,
  doSendMessage,
  sendPreference,
  getEvent,
  getCount,
  doDetectFace,
  doPersonEdit,
  getOtherInfo,
  doUploadVideo
}
