import React, { Fragment } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import { NavLink } from 'react-router-dom'
import { Top, Tab, TabItem } from './style'

const Home = (props: RouteConfigComponentProps)=>{
    const { route }  = props
    return(
        <Fragment>
            <Top>
                <span className="iconfont">&#xe61d;</span>
                <span className="title">Music App</span>
                <span className="iconfont">&#xe621;</span>
            </Top>
            <Tab>
                <NavLink to='/recommend' activeClassName='selected'>
                    <TabItem>
                        <span>推荐</span>
                    </TabItem>
                </NavLink>
                <NavLink to='/singers' activeClassName='selected'>
                    <TabItem>
                        <span>歌手</span>
                    </TabItem>
                </NavLink>
                <NavLink to='/rank' activeClassName='selected'>
                    <TabItem>
                        <span>排行榜</span>
                    </TabItem>
                </NavLink>
            </Tab>
            { renderRoutes(route?.routes || []) }
        </Fragment>
    )
}

export default React.memo(Home)