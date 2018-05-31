import React, { Component } from 'react'
class Cohort extends Component {
    render() {
        return (
            <div>
                <h5>{this.props.cohort}</h5>
            </div>
        );
    }
}

export default Cohort