import React from 'react';
import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';

class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="header">
        <SearchBar/>
      </div>
    )
  }
}

export default Header;