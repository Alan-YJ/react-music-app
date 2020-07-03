import React from 'react';
import Item from './item'
import { RecommendContainer } from './style'

const RecommendList = (props)=>{
    const { list } = props
    return (
        <RecommendContainer>
            { list.map(item=>{
                return (
                    <Item item={item}></Item>
                )
            })}
        </RecommendContainer>
    )
}

export default React.memo(RecommendList)

