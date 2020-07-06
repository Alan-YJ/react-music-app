import React,{ useEffect } from 'react';
import PropTypes from 'prop-types'
import Scroll from '../../components/scroll'
import { List, ListItem} from './style'

const Horizen = (props)=>{
    const { list, value, title, handleClick } = props

    const Category = React.useRef(null)

    useEffect(()=>{
        //初始化外层盒子宽度
        let categoryDom = Category.current
        let tagElems = categoryDom.querySelectorAll("li")
        let totalWidth = 0
        Array.from(tagElems).forEach(el=>{
            totalWidth += el.offsetWidth;
        })
        categoryDom.style.width = `${totalWidth}px`
    },[])

    return (
        <Scroll direction="horizontal">
            <div ref={Category}>
                <List>
                    <li className='title'>{title}</li>
                    {
                        list.map(item=>{
                            return(
                                <ListItem key={item.key} 
                                    className={`${value === item.key?"active":""}`}
                                    onClick={()=>{handleClick(item.key)}}>
                                    {item.name}
                                </ListItem>
                            )
                        })
                    }
                </List>
            </div>
        </Scroll>
    )
}

Horizen.defaultProps = {
    list:[],
    value:'',
    title:'',
    handleClick:null
}

Horizen.propTypes = {
    list: PropTypes.array,
    value: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    title: PropTypes.string,
    handleClick: PropTypes.func
}

export default React.memo(Horizen)