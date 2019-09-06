import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../store/actions/auth';

class LogOut extends  React.Component{
    render() {
        this.props.logOut();

        return <Redirect to={'/signin'}/>;
    }
}

export default connect(
    undefined,
    dispatch => ({
        logOut: () => {
            dispatch(logout());
        }
    })
)(LogOut);

