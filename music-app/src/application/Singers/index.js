import React,{ useState,useEffect } from 'react';
import Scroll from '../../components/scroll'
import Horizen from '../../baseUI/horizen-item'
import Loading from '../../components/loading'
import * as actionTypes from './store/actionCreators'
import { connect } from 'react-redux'
import { types, areas, alphaTypes } from '../../api/config'
import { SingerContainer, NavigatorContainer, SingerWrapper, SingerItem } from './style'

const Singers = (props)=>{
    const { singers, getSingers, loading, offset, changeOffset } = props
    const [ type,setType ] = useState(-1)
    const [ area, setArea] = useState(-1)
    const [ initial, setInitial] = useState('')

    useEffect(()=>{
        getSingers({
            type:type,
            area:area,
            initial:initial,
            offset:offset
        })
    },[type,area,initial])

    const changeType = (val)=>{
        setType(val)
    }
    const changeArea = (val)=>{
        setArea(val)
    }
    const changeAlpha = (val)=>{
        setInitial(val)
    }
    const pullDown = (e)=>{
        console.info(123,e)
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
                <Scroll pullDown={pullDown}>
                    <div>
                        {
                            singerList.map(item=>{
                                return (
                                    <SingerItem key={item.id}>
                                        <div className='avatar'>
                                            <img src={item.picUrl}/>
                                        </div>
                                        <div className='name'>{item.name}</div>
                                    </SingerItem>
                                )
                            })
                        }
                    </div>
                    { loading?<Loading></Loading>:null }
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
