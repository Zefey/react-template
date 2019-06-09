import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';

const User = Loadable({
  loader: () => import('../containers/User'),
  loading: Loading
});

const Test = Loadable({
  loader: () => import('../containers/Test'),
  loading: Loading
});


export default class Container extends Component{
  
  render(){
    return(
    <Router>
      <Route path="/" exact={true} component={User}/>
      <Route path="/test" exact={true} component={Test}/>
    </Router>
    )
  }
}
