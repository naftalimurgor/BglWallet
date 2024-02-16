// all wallet stuff here:
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  state: 'idle',
  wallet: {
    address: null,
    privateKey: null,
    mnemonic: null
  },
  auth: {
    email: null,
    token: null,
    uid: null,
    auth: false
  },
  user: null,
  installState: 'first_time',
  dashboard: {
    balance: null,
    bglInfo: null
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
      state.wallet = action.payload
    },

    loadWallet: (state, action) => {

    },
    installState: (state, action) => {
      state.installState = action.payload
    },
    loadDashboard: (state, action) => {
      state.dashboard = action.payload
    }

  }

})

// thunks 
// const walletApi = createAsyncThunk('/wallet/api', async () => {
//   return async function walletLoadThunk(email: string, password: string) {
//     // code ommitted, reffer to the tutorial
//   }
// })

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
export const { createWallet, loadWallet, createAccount, installState, loadDashboard } = walletSlice.actions

// reducer
export default walletSlice.reducer

