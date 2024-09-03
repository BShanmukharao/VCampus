import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const ToggleSideBarSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleValue: (state) => {
      state.value = !state.value
    },
    toggleByAmount: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { toggleValue, closeSidebar, toggleByAmount } = ToggleSideBarSlice.actions

export default ToggleSideBarSlice.reducer