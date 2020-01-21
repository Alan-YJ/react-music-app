import React, { forwardRef, useState, useEffect, useRef } from 'react'
import BScroll from 'better-scroll'


const Scroll = forwardRef((props,ref)=>{
    const [bScroll, setBScroll] = useState()
    const scrollContaninerRef = useRef()
    const { direction, click, refresh, pullUpLoading, pullDownLoading, bounceBottom, bounceTop, pullUp, pullDown, onScroll } = props
    useEffect(()=>{
        if(refresh&&bScroll){
            bScroll.refresh()
        }
        if(!bScroll||!onScroll){
            return
        }
        bScroll.on('scroll',(scroll)=>{
            onScroll(scroll)
        })
        const scroll = new BScroll(scrollContaninerRef.current,{
            scrollX:direction==='horizental',
            scrollY:direction==='vertical',
            probeType:3,
            click:click,
            bounce:{
                top:bounceTop,
                bottom:bounceBottom
            },
        })
        setBScroll(scroll)
        return ()=>{
            setBScroll(null)
        }
    },[])
})

export default React.memo(Scroll)