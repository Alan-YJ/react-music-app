import { axiosInstance } from './config'

//获取推荐数据
export const getBannerRequest = ()=>{
    return axiosInstance.get('/banner')
}

export const getRecommendListRequest = ()=>{
    return axiosInstance.get('/personalized')
}

//获取歌手数据
export const getSingerListRequest = (params)=>{
    return axiosInstance.get('/artist/list',{
        params
    })
}