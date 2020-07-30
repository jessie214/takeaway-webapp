import React  from 'react';
import {connect} from 'react-redux'; 
import  BottomBar  from '../BottomBar/BottomBar.jsx';
import Home from '../Home/Home.jsx';

import { Route, withRouter } from 'react-router-dom';

import Loadable from 'react-loadable';
import Loading from './Loading';
const Order = Loadable({
  loader: () => import(/* webpackChunkName: "order" */'../Order/Order'),
  loading: Loading,
});

const My = Loadable({
  loader: () => import(/* webpackChunkName: "my" */'../My/My'),
  loading: Loading,
});

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {    
    return (
      <div>
          <Route exact path="/home" component={Home}/>
          <Route path="/order" component={Order}/>
          <Route path="/my" component={My}/>
          <BottomBar />
      </div>
  );
  }
} 

export default withRouter (connect(
  (state) => ({
      
  })
)(Main)); 