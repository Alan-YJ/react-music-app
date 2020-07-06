import styled from 'styled-components'
import style from '../../assets/globle-style'

export const List = styled.ul`
    list-style:none;
    padding:0;
    margin:0;
    display:flex;
    align-items:center;
    overflow:hidden;
    height:30px;
    line-height:18px;
    >li.title{
        flex:0 0 auto;
        line-height:30px;
        padding:5px 0;
        margin-right:5px;
        color:grey;
        font-size:${style["font-size-m"]};
        vertical-align:middle;
    }
`

export const ListItem = styled.li`
    flex:0 0 auto;
    font-size:${style["font-size-m"]};
    padding:5px 8px;
    border-radius:10px;
    &.active{
        color:${style["theme-color"]};
        border: 1px solid ${style["theme-color"]};
        opacity: .8;
    }
`