import React,{ useState,useEffect, useContext } from 'react';
import Scroll from '../../components/scroll'
import Horizen from '../../baseUI/horizen-item'
import * as actionTypes from './store/actionCreators'
import LazyLoad, {forceCheck} from 'react-lazyload'
import { connect } from 'react-redux'
import { types, areas, alphaTypes } from '../../api/config'
import { SingerContainer, NavigatorContainer, SingerWrapper, SingerItem } from './style'
import { CHANGE_ALPHA, CategoryDataContext, CHANGE_CATEGORY, CHANGE_AREA } from './data';

const Singers = (props)=>{
    const { singers, getSingers, loading, offset, changeOffset } = props
    const [ type,setType ] = useState(-1)
    const [ area, setArea] = useState(-1)
    const [ initial, setInitial] = useState('')
    const { data, dispatch } = useContext(CategoryDataContext)
    const { category, alpha } = data.toJS() 

    useEffect(()=>{
        getSingers({
            type:type,
            area:area,
            initial:initial,
            offset:offset
        })
    },[type,area,initial,offset])

    const refresh = ()=>{
        getSingers({
            type:type,
            area:area,
            initial:initial,
            offset:offset
        })
    }

    const changeType = (val)=>{
        dispatch({type: CHANGE_CATEGORY, data: val})
        setType(val)
    }
    const changeArea = (val)=>{
        dispatch({type: CHANGE_AREA, data: val})
        setArea(val)
    }
    const changeAlpha = (val)=>{
        dispatch({type: CHANGE_ALPHA, data: val})
        setInitial(val)
    }
    const pullDown = ()=>{
        changeOffset(offset + 1)
    }
    const pullingDown = ()=>{
        if(offset!=0){
            changeOffset(0)
        }else{
            refresh()
        }
    }

    const singerList = singers? singers.toJS(): []
    
    return(
        <SingerContainer>
            <NavigatorContainer>
                <Horizen list={ types } value={ type } title="歌手类型" handleClick={ changeType }></Horizen>
                <Horizen list={ areas } value={ area } title='地区' handleClick={ changeArea }></Horizen>
                <Horizen list={ alphaTypes } value={ initial } title='首字母' handleClick={ changeAlpha }></Horizen>
            </NavigatorContainer>
            <SingerWrapper>
                <Scroll pullingUp={pullDown} pullDown={ pullingDown } pullDownLoading={loading} pullUpLoading={loading} onScroll={forceCheck}>
                    <div>
                        {
                            singerList.map((item,index)=>{
                                return (
                                    <SingerItem key={index}>
                                        <div className='avatar'>
                                            <LazyLoad placeholder={<img src={require("../../assets/images/placeholder.png")} width='100%' height='100%' />}>
                                                <img src={item.picUrl+"?params=300x300"}/>
                                            </LazyLoad>
                                        </div>
                                        <div className='name'>{item.name}</div>
                                    </SingerItem>
                                )
                            })
                        }
                    </div>
                    {/* { loading?<Loading></Loading>:null } */}
                </Scroll>
            </SingerWrapper>
        </SingerContainer>
    )
}

const mapStateToProps = (state)=>({
    singers:state.getIn(['singer','singers']),
    loading:state.getIn(['singer','loading']),
    offset:state.getIn(['singer','offset']),
})

const mapDispatchToProps = (dispatch)=>{
    return{
        getSingers(params){
            dispatch(actionTypes.getSingerList(params))
        },
        changeOffset(offset){
            dispatch(actionTypes.changeOffset(offset))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Singers))
