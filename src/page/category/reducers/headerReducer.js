
import {TABKEY} from '../config.js'
let tabs = {};

tabs[TABKEY.cate] = {
    key: TABKEY.cate,
    text: '全部分类',
    obj: {}
};
tabs[TABKEY.type] = {
    key: TABKEY.type,
    text: '综合排序',
    obj: {}
};
tabs[TABKEY.filter] = {
    key: TABKEY.filter,
    text: '筛选',
    obj: {}
};
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
    
    default: 
      return state;
  }
};

export default tabReducer;