import styled from 'styled-components'
import style from '../../assets/globle-style'

export const RecommendItem = styled.dl`
    position:relative;
    margin:0;
    dt{
        line-height:0;
        img{
            width:100%;
            height:100%;
        }
    }
    .desc{
        margin:4px;
        display:-webkit-box;
        -webkit-line-clamp:2;
        text-overflow:ellipsis;
        -webkit-box-orient:vertical;
        overflow:hidden;
        font-size:12px;
        line-height:1.2;
        color:${style['font-color-desc']};
    }
    .play-count{
        position:absolute;
        top:3px;
        right:3px;
        color:${style['font-color-light']};
        text-shadow:2px 2px 2px gray;
        font-size:${style['font-size-s']};
        .iconfont{
            font-size:${style['font-size-s']};
        }
    }
    .iconfont{
        margin-right:2px;
    }
`