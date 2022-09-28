import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import _ from 'lodash'

// 获取文章列表
export const getList = createAsyncThunk('article/getList',async ({
  }): Promise<void> => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({data: {
        list: [1, 2, 3, 4],
        total: 5
      }})
    }, 500);
  })
  try {
    var [res] = await Promise.all([promise])
  } catch (error) {
    console.error(error)
  }
  const payload = _.get(res, 'data', { list: [], total: 0 })
  return payload;
})
// 创建 slice
export const article = createSlice({
  name: 'article',
  initialState: {
    list: [],
    total: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled,(state, { payload } :any) => {
      state.list = payload.list;
      state.total = payload.total;
    })
  }
})
export const {} = article.actions;
export default article.reducer;