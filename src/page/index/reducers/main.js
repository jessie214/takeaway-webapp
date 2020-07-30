import tabReducer from './tabReducer.js';
import categoryReducer from './categoryReducer.js';
import contentListReducer from './contentListRedcuer';
import orderReducer from './orderReducer.js';
import scrollViewReducer from 'component/ScrollView/scrollViewReducer.js';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export const reducers = combineReducers({
  tabReducer,
  categoryReducer,
  contentListReducer,
  scrollViewReducer,
  orderReducer,
  router: routerReducer
});

export default reducers;