import * as actionTypes from './constants'
import { fromJS } from 'immutable'
import { getSingerListRequest } from '../../../api/request'

export const changeSingerList = (data)=>({
    type:actionTypes.CHANGE_SINGERS,
    data:fromJS(data)
})

export const getSingerList = (params)=>{
    return (dispatch)=>{
        getSingerListRequest(params).then(res=>{
            dispatch(changeSingerList(res.artists))
        }).catch(err=>{
            console.error(err,'歌手信息获取失败')
        })
    }
}
