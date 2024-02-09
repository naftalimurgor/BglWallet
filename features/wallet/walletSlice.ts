// all wallet stuff here:
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  state: 'idle',
  wallet: [],
  credentials: {
    email: null,
    password: null
  }
}
const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    createWallet: (state, action) => {
      // omit logic for api implementation
    },
    loadWallet: (state, acton) => {

    }
  }

})

// thunks 
const walletApi = createAsyncThunk('/wallet/api',async () => {
  return async function walletLoadThunk(email: string, password: string) {
    // code ommitted, reffer to the tutorial
  }
})

// sample thunk
// export function fetchToDoById(id) {
//   // note: dispatch and getstate functions
//   // this is our thunk function for fetchTodoById
//   return async function fetchToDoByIdThunk(dispatch, getState) {
//     const response = await client.get(`/fakeApi/todo/${id}`)
//     dispatch(todosLoaded(response.data))
//     return {}
//   }
// }
// actions
const {createWallet, loadWallet} = walletSlice.actions

// reducer
export default walletSlice.reducer

