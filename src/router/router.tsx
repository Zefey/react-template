import React, {Component} from 'react';
import { Router,Route } from 'react-router-dom';
import User from '../containers/User';
import Test from '../containers/Test';
import NotFound from '../containers/NotFound';

export default class Container extends Component{
  constructor(props:any){
    super(props);
  }
  render(){
    return(
    <Router>
      <Route path="/" component={User}/>
      <Route path="/test" component={Test}/>
      <Route path="*" component={NotFound}/>
    </Router>
    )
  }
}
