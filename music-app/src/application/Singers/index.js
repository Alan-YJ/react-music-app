import React,{ useState,useEffect } from 'react';
import Scroll from '../../components/scroll'
import Horizen from '../../baseUI/horizen-item'
import * as actionTypes from './store/actionCreators'
import { connect } from 'react-redux'
import { types, areas, alphaTypes } from '../../api/config'
import { SingerContainer, NavigatorContainer, SingerWrapper, SingerItem } from './style'

const Singers = (props)=>{
    const { singers, getSingers } = props
    const [ type,setType ] = useState(-1)
    const [ area, setArea] = useState(-1)
    const [ initial, setInitial] = useState('')

    useEffect(()=>{
        getSingers({
            type:type,
            area:area,
            initial:initial
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
    
    const singerList = singers? singers.toJS(): []



    return(
        <SingerContainer>
                <NavigatorContainer>
                    <Horizen list={ types } value={ type } title="歌手类型" handleClick={ changeType }></Horizen>
                    <Horizen list={ areas } value={ area } title='地区' handleClick={ changeArea }></Horizen>
                    <Horizen list={ alphaTypes } value={ initial } title='首字母' handleClick={ changeAlpha }></Horizen>
                </NavigatorContainer>
                <SingerWrapper>
                    <Scroll>
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
                    </Scroll>
                </SingerWrapper>
        </SingerContainer>
    )
}

const mapStateToProps = (state)=>({
    singers:state.getIn(['singer','singers'])
})

const mapDispatchToProps = (dispatch)=>{
    return{
        getSingers(params){
            dispatch(actionTypes.getSingerList(params))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Singers))
