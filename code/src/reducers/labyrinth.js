import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  currentDirection: []
}

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setUserName: (store, action) = {
    store.username = actions.payload
  },
  setDescription: (store, actions) => {
    store.description = actions.payload
  },
}
})

