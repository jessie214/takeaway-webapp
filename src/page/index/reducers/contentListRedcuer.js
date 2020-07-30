import { CHANG_LIST_DATA } from '../actions/actionType.js';

const defaultState = {
  list:[]
}

const getContentList = (state, action) => {
  if(action.currentPage === 0) {
    return { ...state, list: action.result.data.poilist }
  }else{
    let list = state.list;    
    return {...state, list: list.concat(action.result.data.poilist)  }
  }
  
}

const contentListReducer = (state=defaultState, action) => {
  switch(action.type) {
    case CHANG_LIST_DATA: return getContentList(state, action);
    default: return state;
  }
}

export default contentListReducer;