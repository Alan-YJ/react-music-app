import styled from 'styled-components'
import style from '../../assets/globle-style'

export const RecommendContainer = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-column-gap:5px;
    grid-row-gap:5px;
    padding:0 5px;
`

export const RecommendTitle = styled.div`
    font-weight:700;
    padding-left:6px;
    font-size:${style['font-size-m']};
    line-height:40px;
`