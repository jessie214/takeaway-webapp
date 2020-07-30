import { ORDER_DATA } from '../actions/actionType';
import axios from 'axios';

// export const getOrderData = (page) => (dispatch) => {
//   axios({
//     method: 'get',
//     url :' ./json/orders.json'
//   }).then((res) => {
//     dispatch({
//       type:ORDER_DATA,
//       result : res.data
//     })
//   });
//   console.log(res)
// }

const changeOrderData = (result) => ({ //该方法接收到data中的primary_filter数据
  type:ORDER_DATA,
  result,
});



export const getOrderData = (page)  => {
  return (dispatch) => { //return函数直接接收dispatch方法    
      axios.get('./json/orders.json').then ((res) => {    //获取json数据，筛选出需要的数据项
      const result = res.data;  
      dispatch(changeOrderData(result));//派发action并将数据result传递给reducer
    });
  }  
}