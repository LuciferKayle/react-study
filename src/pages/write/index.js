import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Write extends Component {
    render() {
        if(this.props.loginState) {
            return (
                <div>write page</div>
            )
        } else {
            return (
                <Redirect to="/login"></Redirect>
            )
        }
    }
}
const mapState = (state) => {
    return {
        loginState: state.getIn(['login','loginState'])
    }
}

export default connect(mapState,null)(Write);