import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 10;


export const storeReducer = createSlice({
  name : 'storeReducer',
  initialState : {value : initialStateValue},
  reducers : {
    buyCake : (state , action)=>{
      if(state.value !== 0) state.value-= action.payload;
    },
    deleteCake : (state , action)=>{
      state.value-= action.payload;
    }
  }
})




const store = configureStore({
    reducer : {
      cake : storeReducer.reducer
    } 
  }
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
