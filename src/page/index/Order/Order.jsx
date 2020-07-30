import React from 'react';
import './Order.scss';
import { connect } from 'react-redux';
import ScrollView from 'component/ScrollView/ScrollView.jsx';
import ItemList from './ItemList/ItemList.jsx'
import { getOrderData } from '../actions/orderAction.js';

/**
 * @constructor <Order />
 * @description Order
 */

class Order extends React.Component{
  constructor(props){
    super(props);
    this.page = 0;
    this.state = {
      isend : false
    }
    this.props.changeOrderList(this.page);
  }
  loadPage(){
    this.page++;
    if (this.page > 3) {
        this.setState({
            isend: true
        });
    } else {
      this.props.changeOrderList(this.page);
    }
  }
  renderList(){   
    const { list, loadPage,isend } = this.props;
    return list && list.map((item, index)=>{
        return <ItemList itemData={item} key={index}></ItemList>
        
    });
  }
  render(){    
    const{ isend,list,getOrderData}= this.props;
    return (
      <div className="order">
          <div className="header">订单</div>
          {/*向下滚动加载数据，最多显示3屏*/}
          <ScrollView dis="order" loadCallback={() =>{this.loadPage()}} isend={this.state.isend}>
              <div className="order-list">{this.renderList()}</div>
          </ScrollView>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  list: state.orderReducer.list
});

const mapDispatchToProps = (dispatch) => ({
  changeOrderList(page){
    dispatch(getOrderData(page));
  }
})
export default connect(mapStateToProps,  mapDispatchToProps)(Order);