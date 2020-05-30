import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'

const store = createStore(rootReducer)


ReactDOM.render(<Provider store={store}><BrowserRouter><Main /></BrowserRouter></Provider>,
  document.getElementById('root')
)



