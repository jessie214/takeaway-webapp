import { CHANGE_TAB } from './actionType.js';

export const changeTab = (item) => {
  return {
      type: CHANGE_TAB,
      item:item // action中包括item中的activeKey值
  }
  
}