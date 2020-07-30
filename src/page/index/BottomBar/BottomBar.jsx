import React  from 'react';
import  './BottomBar.scss';
import {connect} from 'react-redux';  
// import { changeTab } from '../actions/tabAction';
import { NavLink, withRouter } from 'react-router-dom';  
/**
*@constructor <BottomBar>
*@description the tab bar on the bottom of homepage
*/

class BottomBar extends React.Component {
  constructor(props) {
    super(props)
  }
  changeTab(item){
    this.props.history.replace(item.key);
  }
  renderItems(){
    const { tabs, activeKey} = this.props;
    return tabs && tabs.map((item, index) => {
      let itemStyle = item.key + ' btn-item';
      //item.key是三个item的key值，activeKey是当前点击的key值，给点击的item项添加active样式      
      // if (item.key===activeKey) {
      //   itemStyle += ' active';
      // }
      return ( 
        <NavLink key={index} className={itemStyle} replace={true} to={"/" + item.key} activeClassName="active" onClick={()=>this.changeTab(item)}>
          <div className="tab-icon"></div>
          <div className="btn-name">{item.name}</div>
        </NavLink>
      )
    })
  }
  render(){
    return(
      <div className="bottom-bar">
        {this.renderItems()}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
      tabs: state.tabReducer.tabs,
      activeKey : state.tabReducer.activeKey
      
});

const mapDispatchToProps = (dispatch) => ({  
  //  changeTab(item){      
  //   dispatch(changeTab({  
  //     activeKey:item.key    
  //   }));   
  // }
});
export default withRouter(connect(mapStateToProps,  mapDispatchToProps)(BottomBar)); 