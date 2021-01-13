import axios from 'axios'
import privateKey from '../.secret'

const getDetail = (videoId, setData, setError) => {
  let data = {}
  axios({
    method: 'GET',
    url: 'https://youtube.googleapis.com/youtube/v3/videos',
    params: {
      key: privateKey,
      part: 'snippet,statistics',
      regionCode: 'FR',
      id: videoId
    }
  })
    .then(res => {
      data = res.data.items.length > 0 ? res.data.items[0] : {}
      setData(data)
    })
    .catch(err => {
      setError(err.message)
    })
}

export default getDetail
