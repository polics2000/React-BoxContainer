import React, { Component } from 'react';
import './SingleBox.css';

class SingleBox extends Component {
    render() {
        return(
            <div className="Box" style={{color:this.props.color}}>
                SingleBox
            </div>
        )
    }
}

export default SingleBox;