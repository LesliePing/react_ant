import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import{ default as ConfigRoutes} from '@/router';
// 引入router、redux、antd.css
import store from './store'
// 引入 antd 样式
import 'ant/dist/antd.css'
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <BrowserRouter>
        <ConfigRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
