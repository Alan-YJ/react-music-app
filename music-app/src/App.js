import React from 'react';
import routes from './routes/index'
import store from './store/index'
import { Data } from './application/Singers/data'
import { Provider } from 'react-redux'
import { IconStyle } from './assets/iconfont/iconfont-component'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import './App.css';

// develop 提交1
// develop 提交2
function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <IconStyle></IconStyle>
                <Data>
                    { renderRoutes(routes) }
                </Data>
            </HashRouter>
        </Provider>
    );
}

export default App;
