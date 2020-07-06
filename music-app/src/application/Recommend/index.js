import React,{ useEffect } from 'react';
import Slider from '../../components/slider'
import RecommendList from '../../components/recommend-list'
import Scroll from '../../components/scroll'
import { Content } from './style'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'

const Recommend = (props)=>{
    const { bannerList, recommendList, getBannerDataDispatch, getRecommendListDataDispatch } = props

    useEffect(() => {
        getBannerDataDispatch()
        getRecommendListDataDispatch()
    }, [])

    const bannerListJS = bannerList? bannerList.toJS() : [];
    console.info(bannerList)
    const recommendListJS = recommendList? recommendList.toJS() : [];

    return(
        <Content>
            <Scroll className='list'>
                <div>
                    <Slider bannerList={ bannerListJS }></Slider>
                    <RecommendList list={ recommendListJS }></RecommendList>
                </div>
            </Scroll>
        </Content>
    )
}

const mapStateToProps = (state)=>({
    bannerList:state.getIn(['recommend','bannerList']),
    recommendList:state.getIn(['recommend','recommendList'])
})

const mapDispatchToProps = (dispatch)=>{
    return {
        getBannerDataDispatch(){
            dispatch(actionTypes.getBannerList())
        },
        getRecommendListDataDispatch(){
            dispatch(actionTypes.getRecommendList());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Recommend))