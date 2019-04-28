import React, {Component} from 'react';
import {
    hashHistory,
    Router,
    Route,
    browserHistory
} from 'react-router';
import User from '../containers/User';
import Test from '../containers/Test';
import NotFound from '../containers/NotFound';

export default class Container extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
    <Router history={hashHistory}>
      <Route path="/" component={User}/>
      <Route path="/test" component={Test}/>
      <Route path="*" component={NotFound}/>
    </Router>
    )
  }
}
