import React from 'react'
import Slider from '../../components/slider'
import RecommentList from '../../components/list'

function Recommend(props){
    const bannerList = [1,2,3,4].map(item=>{
        return { imageUrl:"http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" }
    })

    const recommendList = [1,2,3,4,5,6,7,8,9,10].map(item=>{
        return {
            id:item,
            picUrl:'https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg',
            playCount:1717112,
            name:"歌曲名称"
        }
    })

    return (
        <div>
            <Slider bannerList={bannerList}></Slider>
            <RecommentList recommendList={recommendList}></RecommentList>
        </div>
    )
}

export default React.memo(Recommend);