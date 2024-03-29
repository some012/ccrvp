import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      console.log(action.payload)
      state.value += action.payload
    },
    setValue: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { increment, decrement, incrementByAmount, setValue } = counterSlice.actions

export const selectCount = (state) => state.counter.value

export default counterSlice.reducer