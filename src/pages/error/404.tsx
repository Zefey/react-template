import React, {Component} from 'react';
import './style.css';

interface Props {}

export default class NotFound extends Component<Props>{
    constructor(props:any){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div id="error">
                <p>404</p>
                <div className="sss">
                    sssss
                </div>
            </div>
        )
    }

}
