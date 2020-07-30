import { CHANG_LIST_DATA } from './actionType.js';
import { CHANGEREADYSTATE } from 'component/ScrollView/scrollViewActionsTypes.js';

import axios from 'axios';

// const changeListData = (result) => ({ //该方法接收到data中的primary_filter数据
//   type:CHANG_LIST_DATA,
//   result,
// });


//缺少 async和await 记得加上
// export const getListData = (page)  => {
//   return (dispatch) => { //return函数直接接收dispatch方法    
//       axios.get('./json/homeList.json').then ((res) => {    //获取json数据，筛选出需要的数据项
//       const result = res.data;  
//       dispatch(changeListData(result));//派发action并将数据result传递给reducer
//     });
//   }  
// }

export const getListData = (page)=> (dispatch) =>{
  dispatch({
      type: CHANGEREADYSTATE,
      result: false
  });
  axios({
      method: 'get',
      url: './json/homelist.json'
  }).then((res)=>{
      window.setTimeout(()=>{
          dispatch({
              type: CHANG_LIST_DATA,
              currentPage: page, 
              result: res.data
          });          
          dispatch({
              type: CHANGEREADYSTATE,
              result: true
          });
      },1500);

  });

}