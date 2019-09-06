import React from 'react';
import {connect} from "react-redux";
import {isAuth} from "../../utility";
const PrivateComponent = (props) => {
    return isAuth(props.token) ? props.children : null;
 };
export default
connect( (state)=>({
    token: state.auth.token
} ))(PrivateComponent)