import axios from 'axios'

// const axiosInstance = axios.create()

// axiosInstance.interceptors.response.use(
//     (response) => response,
//     (error) =>
//         Promise.reject(
//             (error.response && error.response.data) || 'Something went wrong!'
//         )
// )

// export default axiosInstance

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
    //baseURL: 'http://3.82.209.241:8080'
})