import React, { Component } from 'react'
class Name extends Component {
    render() {
        return (
            <div>
                <h5>{this.props.name}</h5>
            </div>
        );
    }
}

export default Name