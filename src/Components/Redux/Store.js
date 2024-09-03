import { configureStore } from '@reduxjs/toolkit'
import toggleReducer from './ToggleSideBarSlice'

export const Store = configureStore({
  reducer: {
    toggle : toggleReducer,
  },
})