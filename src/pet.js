import React, { Component } from 'react'
class Pet extends Component {
    render() {
        return (
            <div>
                <h5>{this.props.pet}</h5>
            </div>
        );
    }
}

export default Pet