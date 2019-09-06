import {Redirect, Route} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

 function PrivateRoute({component: Component, st,redirectPath, pred, ...rest}) {
        return (
            <Route
                {...rest}
                render={prop =>
                    pred(st) ?
                        <Component {...prop} />
                        : (
                            <Redirect
                                to={{
                                    pathname: redirectPath,
                                    state: {from: prop.location}
                                }}
                            />
                        )
                }
            />
        );

}
export default connect((state)=>({
    st: state.auth.token
}))(PrivateRoute);

connect(state=>({st: state}))(PrivateRoute)