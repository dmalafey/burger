import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../store/actions/auth";

class LogOut extends  React.Component{

    componentWillMount() {

       // this.props.logOut1();
    }

    render(){
        this.props.logOut1()
        return (<Redirect to={'/signin'}/>)
    }



}
export default connect(
    state =>({
        token: state.auth.token
    } ),
    dispatch => ({
        logOut1: () => {
            dispatch(logout());
        }
    })


)(LogOut);

