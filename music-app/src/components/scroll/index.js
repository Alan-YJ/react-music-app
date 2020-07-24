import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react';
import Scroll from 'better-scroll'
import PropTypes from 'prop-types'
import { ScrollContainer } from './style'
import Loading from '../loading'
import LoadingV2 from '../loading-v2'

const ScrollComponent = forwardRef((props,ref)=>{
    const { direction, click, refresh, bounceTop, bounceBottom, pullUp, pullingUp, pullDown, onScroll, children, pullUpLoading, pullDownLoading } = props
    const [bScroll, setBScroll] = useState()
    const scrollContainerRef = useRef()
    const PullUpdisplayStyle = pullUpLoading ? { display:""} : {display:'none'}
    const PullDowndisplayStyle = pullDownLoading ? { display:""} : {display:'none'}

    useEffect(()=>{
        const scroll = new Scroll( scrollContainerRef.current,{
            scrollX:direction==='horizontal',
            scrollY:direction==='vertical',
            probeType:3,
            click:click,
            bounce:{
                top:bounceTop,
                bottom:bounceBottom
            }
        });
        setBScroll(scroll)
        return ()=>{
            setBScroll(null)
        }
    },[])

    useEffect(()=>{
        if(!bScroll || !onScroll){
            return
        }
        bScroll.on('scroll',(scroll)=>{
            onScroll(scroll)
        })
        return ()=>{
            bScroll.off('scroll')
        }
    },[onScroll,bScroll])

    useEffect(()=>{
        if(!bScroll || !pullUp){
            return
        }
        bScroll.on('scrollEnd',()=>{
            if(bScroll.y <= bScroll.maxScrollY + 100){
                pullUp()
            }
        })
        return ()=>{
            bScroll.off('scrollEnd')
        }
    },[pullUp,bScroll])

    useEffect(()=>{
        if(!bScroll || !pullingUp){
            return
        }
        bScroll.on('scrollEnd',()=>{
            if(bScroll.y <= bScroll.maxScrollY + 100){
                pullingUp()
            }
        })
        return ()=>{
            bScroll.off('scrollEnd')
        }
    },[pullingUp,bScroll])

    useEffect(()=>{
        if(!bScroll || !pullDown){
            return
        }
        bScroll.on('touchEnd',(pos)=>{
            if(pos.y > 50){
                pullDown()
            }
        })
        return ()=>{
            bScroll.off('touchEnd')
        }
    },[pullDown,bScroll])

    useEffect(()=>{
        if(refresh && bScroll){
            bScroll.refresh()
        }
    })

    useImperativeHandle(ref,()=>({
        refresh(){
            if(bScroll){
                bScroll.refresh()
                bScroll.scrollTo(0,0)
            }
        },
        getBScroll(){
            if(bScroll){
                return bScroll
            }
        }
    }))

    return (
        <ScrollContainer ref={scrollContainerRef}>
            { children }
            <div style={PullUpdisplayStyle}><Loading></Loading></div>
            <div style={PullDowndisplayStyle}><LoadingV2></LoadingV2></div>
        </ScrollContainer>
    )
})

ScrollComponent.defaultProps = {
    direction: 'vertical',
    click: true,
    refresh: true,
    onScroll: null,
    pullUpLoading: false,
    pullDownLoading: false,
    pullUp: null,
    pullingUp:null,
    pullDown: null,
    bounceTop: true,
    bounceBottom: true
}

ScrollComponent.propTypes = {
    direction: PropTypes.oneOf(['vertical','horizontal']),
    refresh: PropTypes.bool,
    onScroll: PropTypes.func,
    pullUp: PropTypes.func,
    pullingUp:PropTypes.func,
    pullDown: PropTypes.func,
    pullUpLoading: PropTypes.bool,
    pullDownLoading: PropTypes.bool,
    bounceTop: PropTypes.bool, //是否支持向上吸顶
    bounceBottom: PropTypes.bool //是否支持向下吸顶
}

export default ScrollComponent
