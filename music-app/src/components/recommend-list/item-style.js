import styled from 'styled-components'
import style from '../../assets/globle-style'

export const RecommendItem = styled.dl`
    position:relative;
    margin:0;
    dt{
        img{
            width:100%;
            height:100%;
        }
    }
    .title{
        margin:4px;
        display:-webkit-box;
        -webkit-line-clamp:2;
        text-overflow:ellipsis;
        -webkit-box-orient:vertical;
        overflow:hidden;
    }
    .play-count{
        position:absolute;
        top:5px;
        right:5px;
        color:white;
        text-shadow:2px 2px 2px gray;
    }
    .iconfont{
        margin-right:2px;
    }
`