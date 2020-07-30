import React from 'react';
import './ContentList.scss';
import { connect } from 'react-redux';
import  ListItem  from '../../../../component/ListItem/ListItem.jsx'; 
import ScrollView from '../../../../component/ScrollView/ScrollView.jsx'
import {getListData } from '../../actions/contentListAction.js';
/**
 * @constructor <ContentList />
 * @description 商家列表
 */

class ContentList extends React.Component {
    constructor(props) {
        super(props);
        //记录当前页码
        this.page = 0;
        //请求第一屏
        this.props.changeListData(this.page);
        // 标识页面是否可以滚动
        this.state = {
          isend : false
        }
    }

    onLoadPage(){
      this.page++;
      if(this.page > 3) {
        this.setState ({
          isend : true
        });
      }else{
        this.props.changeListData(this.page);
      }
    }
    renderItems(){
      const { list, getListData,onLoadPage } = this.props;
      return list && list.map((item, index)=>{
        return (
          <ListItem key={index} itemData={item}></ListItem>
        )         
      });
    }
    render(){      
      return (
        <div className="list-content">
                <h4 className="list-title">
                    <span className="title-line"></span>
                    <span>附近商家</span>
                    <span className="title-line"></span>
                </h4>
                <ScrollView dis="content" loadCallback={this.onLoadPage.bind(this)} isend={this.state.isend}>
                    {this.renderItems()}
                </ScrollView>
            </div>
      ) 
    }
    
    componentDidMount(){ 
      this.props.changeListData();
    }
}
const mapStateToProps = (state) => ({
  list: state.contentListReducer.list
});

const mapDispatchToProps = (dispatch) => ({
  changeListData(page){
    dispatch(getListData(page));
  }
});

export default connect(mapStateToProps,  mapDispatchToProps)(ContentList);