import React, { memo } from 'react';
import { RecommendItem } from './item-style'
import { formatCount } from '../../api/utils'

const Item = (props)=>{
    const { item } = props
    return(
        <RecommendItem>
            <dt>
                <img src={`${item.picUrl}?param=300x300`} />
            </dt>
            <dd className="title">{item.name}</dd>
            <dd className="play-count">
                <span className="iconfont">&#xe672;</span>
                <span>{ formatCount(item.playCount) }</span>
            </dd>
            <dd className="auth"></dd>
        </RecommendItem>
    )
}

export default memo(Item)