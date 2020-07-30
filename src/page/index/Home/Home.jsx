import React from 'react';
import Header from './Header/Header.jsx';
import Category from './Category/Category.jsx';

import './Home.scss';
import ContentList from './ContentList/ContentList.jsx';

/**
 * @constructor <Home />
 * @description The Home page
 */

class Home extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Header/>
        <Category/>
        <ContentList/>
        
      </div>
    )
  }
}

export default Home;