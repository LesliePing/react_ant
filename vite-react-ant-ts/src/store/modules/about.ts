import { createSlice } from "@reduxjs/toolkit";

export interface AboutState {
  counter: number;
  title: string;
}
const initialState: AboutState = {
  counter: 0,
  title: 'redux couter'
}
// 创建 slice
export const about = createSlice({
  name: 'about',
  initialState,
  reducers: { // 定义reducer，生成相关操作
    setCounter(state, { payload }) {
      console.log(payload);
      state.counter = payload.counter;
    }
  }
})
export const { setCounter } = about.actions
export default about.reducer;