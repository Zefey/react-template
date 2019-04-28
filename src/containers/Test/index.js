import React, {Component} from 'react';
import { browserHistory,History,hashHistory } from 'react-router';
import { connect } from 'react-redux'
import './style.css';

class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        console.log('componentDidMount');
        console.log(this.state,this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        console.log('nextProps:' , nextProps);
    }


    render() {
        return (
            <div id="test">
                <p>test page</p>
            </div>
        )
    }

}


export default connect((state) => {
    const { UserReducer } = state;
    return {
        UserReducer
    };
},{})(Test)
