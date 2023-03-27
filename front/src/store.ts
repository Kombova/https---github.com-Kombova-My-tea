import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "@reduxjs/toolkit";
import basketChenge from './redusers/cart';
import itemFull from './redusers/itemFull';
export const store = configureStore({
  reducer: {basketChenge, itemFull}  ,
  devTools: process.env.NODE_ENV !== 'production',
});