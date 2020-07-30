import { CHANGE_TAB } from '../actions/actionType.js';
import {TABKEY} from '../config.js'

const defaultState = {
  tabs : [
    {
      name : 'home',
      key : TABKEY.home
    },
    {
      name : 'order',
      key : TABKEY.order
    },
    {
      name : 'my',
      key : TABKEY.my
    }
  ],
  activeKey: TABKEY.home
};


const changeTab = (state, action)=>{
  let activeKey = action.item.activeKey; //点击的item的key值  
  return { ...state, activeKey: activeKey };
  

};

 const tabReducer = (state = defaultState, action) => {
  switch(action.type) {    
    case CHANGE_TAB : return changeTab(state,action);
    default: 
      return state;
  }
};

export default tabReducer;