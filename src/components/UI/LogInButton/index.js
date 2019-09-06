import React from 'react';
import {connect} from "react-redux";
import {isAuth} from "../../../utility";
import {logout} from "../../../store/actions/auth";



class LogInButton extends React.Component {

    state = {
        isLogin: isAuth(this.props.token)
    };

    render(){
        return(
            <button onClick={this.props.logOut}>{this.state.isLogin ? "log out": null}</button>
        )
    }


};

export default connect(
    state =>({
        token: state.auth.token
    } ),
    dispatch => ({
        logOut: () => {
            dispatch(logout());
        }
    })


)(LogInButton);