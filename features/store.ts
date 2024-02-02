import { configureStore } from "@reduxjs/toolkit";
import walletReducer from './wallet/walletSlice'

export const store = configureStore({
  reducer: {
    wallet: walletReducer
  }
})