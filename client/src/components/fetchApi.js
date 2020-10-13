import axiosWithAuth from '../utils/axiosWithAuth.js'

export function fetchApi() {
    return axiosWithAuth()
        .get('/api/colors')
        .then(res => {
            return res
        })
        .catch(err => console.log(err))
}