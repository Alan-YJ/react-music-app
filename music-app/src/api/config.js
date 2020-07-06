import axios from 'axios';

export const baseUrl = 'http://118.24.71.249:7777/'

const axiosInstance = axios.create({
    baseURL: baseUrl
})

axiosInstance.interceptors.response.use(
    res=> res.data,
    err=>{
        console.error(err,"网络错误")
    }
)

export{
    axiosInstance
}
