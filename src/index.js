import React from 'react';
import ReactDOM from 'react-dom';
import {DataLayer} from "./DataLayer"
import reducer , {initialState} from './Reducer'

import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState = {initialState} reducer = {reducer}>
       <App />
    </DataLayer>
    
  </React.StrictMode>,
  document.getElementById('root')
);

