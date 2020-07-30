import './ScrollView.scss';

import React from 'react';

import Loading from 'component/Loading/Loading.jsx';


import { connect } from 'react-redux';

/**
 * <ScrollView loadCallback={function} isend={bool}/>
 * @description 滚动加载组件
 */

class ScrollView extends React.Component {
    constructor(props) {
        super(props);
        this._onLoadPage = this.onLoadPage.bind(this);
    }
    onLoadPage(){

        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.body.scrollHeight;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        let proLoadDis = 30;

        if ((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {


            if (!this.props.isend) {

                if (!this.props.readyToLoad) {
                  
                    return;
                }
                this.props.loadCallback && this.props.loadCallback();
            }
            
        }
    }

    componentDidMount(){

        window.addEventListener('scroll', this._onLoadPage);
    }
    componentWillUnmount(){
        
        window.removeEventListener('scroll', this._onLoadPage);
    }
    render(){        
      const { readyToLoad } = this.props;
        return (
            <div className="scrollview">
                {this.props.children}
                <Loading isend={this.props.isend}/>
            </div>
        );

    }
}



const mapStateToProps = (state) => ({
  readyToLoad : state.scrollViewReducer.readyToLoad
});

const mapDispatchToProps = (dispatch) => ({
 
});

export default connect(mapStateToProps,  mapDispatchToProps)(ScrollView);
