import { CHANG_HOME_DATA } from './actionType.js';
import axios from 'axios';
import  'babel-polyfill';

const changeHomeData = (result) => ({ //该方法接收到data中的primary_filter数据
  type:CHANG_HOME_DATA,
  result,
});


export const getHearderData = ()  => {
  return async (dispatch) => { //return函数直接接收dispatch方法    
      let res = await axios.get('./json/head.json');
      const result = res.data.data.primary_filter;
      dispatch(changeHomeData(result));//派发action并将数据result传递给reducer
  }  
}

//另一种写法
// export const getHeaderData = ()=> async (dispatch) =>{
//   let resp = await axios({
//       method: 'get',
//       url: './json/head.json',
//   });

//   dispatch({
//       type: HEAD_DATA,
//       obj: resp.data
//   });

// }

