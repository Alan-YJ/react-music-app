import * as actionTypes from './constants'
import { fromJS } from 'immutable'
import { getSingerListRequest } from '../../../api/request'

export const changeSingerList = (data)=>({
    type:actionTypes.CHANGE_SINGERS,
    data:fromJS(data)
})

export const changeLoading = (data)=>({
    type:actionTypes.CHANGE_LOADING,
    data:data
})

export const changeOffset = (data)=>({
    type:actionTypes.CHANGE_OFFSET,
    data:data
})

export const getSingerList = (params)=>{
    return (dispatch)=>{
        dispatch(changeLoading(true))
        getSingerListRequest(params).then(res=>{
            dispatch(changeSingerList(res.artists))
            dispatch(changeLoading(false))
        }).catch(err=>{
            console.error(err,'歌手信息获取失败')
        })
    }
}
