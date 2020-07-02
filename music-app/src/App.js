import React from 'react';
import routes from './routes/index'
import store from './store/index'
import { Provider } from 'react-redux'
import { IconStyle } from './assets/iconfont/iconfont-component'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import './App.css';

function App() {
    return (
        <Provider store={store}>
        <HashRouter>
            <IconStyle></IconStyle>
            { renderRoutes(routes) }
        </HashRouter>
        </Provider>
    );
}

export default App;
