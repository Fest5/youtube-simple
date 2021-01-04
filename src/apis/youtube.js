//TODO: HACER EL RESTRICT CUANDO LO SUBA A GITHUB
import axios from 'axios'

const KEY = 'AIzaSyCsWrq5A-XGyFZPiOsi_QhRxoB-Vj2Msno'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})