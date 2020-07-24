import React from 'react'
import { Loading } from './style.js'

const LoadingV2 = ()=>{
    return(
        <Loading>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <span>拼命加载中...</span>
        </Loading>
    )
}

export default React.memo(LoadingV2)


