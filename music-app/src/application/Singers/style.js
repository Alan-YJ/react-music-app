import styled from 'styled-components'
import style from '../../assets/globle-style'

export const SingerContainer = styled.div`
    ul{
        margin-top:5px;
    }
`

export const NavigatorContainer = styled.div`
    box-sizing:border-box;
    position:fixed;
    top:95px;
    width:100%;
    padding:5px;
    overflow:hidden;
`

export const SingerWrapper = styled.ul`
    list-style:none;
    padding:0;
    margin:0;
    width:100%;
    position:fixed;
    top:210px;
    left: 0;
    bottom:0;
    overflow:hidden;
`

export const SingerItem = styled.li`
    padding:5px 0;
    border-bottom:1px solid ${style["border-color"]};
    display:flex;
    margin:0 5px;
    .avatar{
        width:70px;
        img{
            width:50px;
            height:50px;
            border-radius:3px;
        }
    }
    .name{
        flex:1 0 auto;
        vertical-align:middle;
        line-height:50px;
        color:${style["font-color-desc"]};
        font-size:${style["font-size-s"]}
    }
`