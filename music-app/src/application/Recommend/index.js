import React,{ useEffect } from 'react';
import Slider from '../../components/slider'
import RecommendList from '../../components/recommend-list'
import Scroll from '../../components/scroll'
import Loading from '../../components/loading'
import { Content } from './style'
import { connect } from 'react-redux'
import { forceCheck } from 'react-lazyload'
import * as actionTypes from './store/actionCreators'

const Recommend = (props)=>{
    const { loading, bannerList, recommendList, getBannerDataDispatch, getRecommendListDataDispatch } = props

    useEffect(() => {
        //immutable数据获取长度属性  .size
        if(!bannerList.size){
            getBannerDataDispatch()
        }
        if(!recommendList.size){
            getRecommendListDataDispatch()
        }
    }, [])

    const bannerListJS = bannerList? bannerList.toJS() : [];
    
    const recommendListJS = recommendList? recommendList.toJS() : [];

    return(
        <Content>
            <Scroll className='list' onScroll={forceCheck}>
                <div>
                    <Slider bannerList={ bannerListJS }></Slider>
                    <RecommendList list={ recommendListJS }></RecommendList>
                </div>
            </Scroll>
            { loading?<Loading></Loading>:null}
        </Content>
    )
}

const mapStateToProps = (state)=>({
    bannerList:state.getIn(['recommend','bannerList']),
    recommendList:state.getIn(['recommend','recommendList']),
    loading:state.getIn(['recommend','loading'])
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