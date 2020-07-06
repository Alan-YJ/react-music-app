import React from 'react';
import Item from './item'
import { RecommendContainer, RecommendTitle } from './style'

const RecommendList = (props)=>{
    const { list } = props
    return (
        <>
            <RecommendTitle className="title">推荐歌单</RecommendTitle>
            <RecommendContainer>
                { list.map(item=>{
                    return (
                        <Item item={item} key={item.id}></Item>
                    )
                })}
            </RecommendContainer>
        </>
    )
}

export default React.memo(RecommendList)

