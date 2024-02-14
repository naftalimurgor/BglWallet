// all wallet stuff here:
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  state: 'idle',
  walletObj: {
    accounts: [],
    seedphrase: "Place Holder seedphrase",
  },
  auth: {
    email: null,
    token: null,
    uid: null,
    auth: false
  }
}
const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    createAccount: (state, action) => {
      state.auth = action.payload
    },

    createWallet: (state, action) => {
      state.walletObj = action.payload
    },

    loadWallet: (state, action) => {

    },
    loadWalletDashboard: (state, action) => {

    }

  }

})

// thunks 
const walletApi = createAsyncThunk('/wallet/api', async () => {
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
export const { createWallet, loadWallet, createAccount } = walletSlice.actions

// reducer
export default walletSlice.reducer

