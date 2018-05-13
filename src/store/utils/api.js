import axios from 'axios'

// const url = 'http://triphere.dgseo.info'

export default {
  getHouse: function (state, cb) {
    axios.get('/api/activity/1')
      .then((res) => {
        if (res.status >= 200 & res.status < 300) {
          cb(res.data)
        }
      })
      .catch((err) => {
        return Promise.reject(err)
      })
  }
}
