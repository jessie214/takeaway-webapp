import React from 'react';
import { connect } from 'react-redux';
import './Category.scss';
import { getHearderData } from '../../actions/categoryAction.js';
/**
 * @constructor <Category />
 * @description Category
 */

class Category extends React.Component {
    constructor(props) {
        super(props);
    }
    goCategory(){
      window.location.href = './category.html';
  }
    renderItems(){
      const { headerList } =  this.props;
      return (
        headerList && headerList.splice(0,8).map((item,index)=>{
          return(
            <div key={index} className="category-item" onClick={this.goCategory}>
              <img className="item-icon" src={item.url} />
              <p className="item-name">{item.name}</p>
            </div>
          )
        })
      )
    }
    render(){
      return (
        <div className="category-content clearfix">
          {this.renderItems()}
        </div>
      ) 
    }
    componentDidMount(){ //组件挂载到页面后自动执行
      this.props.changeHeaderData();      //该函数内请求ajax所以需要在页面加载时执行
    }
}
const mapStateToProps = (state) => ({
  headerList : state.categoryReducer.headerList //获取state中的headerList数据
});

const mapDispatchToProps = (dispatch) => ({
  changeHeaderData(){
    dispatch(getHearderData()); //派发action,action就是在categoryAction中创建的getHearderData方法包含type和数据
  }
});

export default connect(mapStateToProps,  mapDispatchToProps)(Category);