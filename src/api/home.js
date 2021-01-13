import axios from 'axios'
import privateKey from '../.secret'

const getTrending = (nbResults, setData, setError) => {
  axios({
    method: 'GET',
    url: 'https://youtube.googleapis.com/youtube/v3/videos',
    params: {
      key: privateKey,
      part: 'snippet,contentDetails,statistics',
      chart: 'mostPopular',
      maxResults: nbResults,
      regionCode: 'FR'
    }
  })
    .then(res => {
      setData(res.data.items)
    })
    .catch(err => {
      setError(err.message)
    })
}

export default getTrending
