import { CHANG_HOME_DATA } from '../actions/actionType.js';

const defaultState = {
  headerList : [],
}

const getCategory = (state, action) => { 
  return {...state, headerList: action.result}
  
}

const categoryReducer = (state=defaultState, action) => {
  switch(action.type) {
    case CHANG_HOME_DATA: return getCategory(state, action);
    default: return state;
  }
}
export default categoryReducer;