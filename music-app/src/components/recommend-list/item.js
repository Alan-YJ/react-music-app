import React, { memo } from 'react';
import { RecommendItem } from './item-style'
import { formatCount } from '../../api/utils'
import LazyLoad from 'react-lazyload'

const Item = (props)=>{
    const { item } = props
    return(
        <RecommendItem>
            <dt>
                <LazyLoad placeholder={<img width='100%' height='100%' src={require('../../assets/images/placeholder.png')} alt='music'/>} >
                    <img src={`${item.picUrl}?param=300x300`} alt='music'/>
                </LazyLoad>
            </dt>
            <dd className="desc">{item.name}</dd>
            <dd className="play-count">
                <span className="iconfont">&#xe672;</span>
                <span>{ formatCount(item.playCount) }</span>
            </dd>
            <dd className="auth"></dd>
        </RecommendItem>
    )
}

export default memo(Item)