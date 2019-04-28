import React, {Component} from 'react';
import { browserHistory,History,hashHistory } from 'react-router';
import { connect } from 'react-redux'
import { Icon, Button } from 'antd';
import {userAction} from '../../actions/UserAction'
import './style.css';

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        console.log('componentDidMount');
        console.log(this.state,this.props);
        this.props.userAction();
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        console.log('nextProps:' , nextProps);
    }


    render() {
        return (
            <div id="user">
                <p>user page</p>
                <Button type="primary" onClick={this.handleClick}> jump </Button>
            </div>
        )
    }

    handleClick = () => {
        hashHistory.push('/test');
    }

}


export default connect((state) => {
    const { UserReducer } = state;
    return {
        UserReducer
    };
},{ userAction })(User)
