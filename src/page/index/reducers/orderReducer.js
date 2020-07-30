import { ORDER_DATA } from '../actions/actionType'
const defaultStatus = {
  list: []
}

const getOrderData = (state, action) => {  
  if (action.currentPage === 0) { //如果第一次加载把第一页数据给list，否则追加数据
    return {...state, list:action.result.data.digestlist}
} else {
    let list = state.list;
    return { ...state, list: list.concat(action.result.data.digestlist)}
}
}
const orderReducer = ( state = defaultStatus, action) => {
  switch(action.type) {
    case ORDER_DATA: return getOrderData(state, action);
    default: return state;
}
}

export default orderReducer;