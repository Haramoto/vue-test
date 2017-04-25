import axios from 'axios'

// 疑似遅延用タイマー
const demoTimer = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
}

// 成功の処理
const apiSuccess = (response) => {
  return demoTimer().then(() => {
    if (response.data.status === true) {
      return response.data.entry
    } else {
      return Promise.reject(response.data)
    }
  })
}

// 失敗の処理
const apiError = (error) => Promise.reject(error.message || 'ERROR')

export default {
  getMembers: () =>
    axios.get('api/item/list.json').then(apiSuccess).catch(apiError),
  putMember: (item) =>
    axios.put('api/item/put.php', { item: item }).then(apiSuccess).catch(apiError),
  postMember: (item) =>
    axios.post('api/item/post.php', { item: item }).then(apiSuccess).catch(apiError)
}