import {createStore, applyMiddleware, } from 'redux';

import mainReducer from './reducers/main.js';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createHashHistory'

import { routerMiddleware } from 'react-router-redux'
// 创建基于hash的history
const history = createHistory();

// 创建初始化tab
history.replace('home');
// 创建history的Middleware
const historyMiddl = routerMiddleware(history);

// const composeEnhancers = window._mainReducer_REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(mainReducer, composeWithDevTools(
  applyMiddleware(thunk,historyMiddl)
));
if (module.hot) {  
  module.hot.accept('./reducers/main', ()=>{
      const nextRootReducer = require('./reducers/main.js').default;
      store.replaceReducer(nextRootReducer)
  });
}
module.exports = {
  store,
  history
}
export default store;