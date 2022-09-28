import { configureStore } from "@reduxjs/toolkit";
import * as reducer from './modules'
// 导出所有的 redux 数据
const store = configureStore({
  reducer: {
    ...reducer
  }
})
export default store