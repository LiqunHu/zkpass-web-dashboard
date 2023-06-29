/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ReduxState } from '@/lib/redux'

export interface UserInfoState {
  userInfo: any
}

const initialState: UserInfoState = {
  userInfo: {}
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      window.localStorage.clear()
      window.localStorage.setItem(
        'token',
        JSON.stringify(action.payload.Authorization)
      )
      window.localStorage.setItem('userinfo', JSON.stringify(action.payload))
      state.userInfo = action.payload
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
  }
})

export const { login } = dashboardSlice.actions

export const getUserInfo = (state: ReduxState) => state.dashboard.userInfo