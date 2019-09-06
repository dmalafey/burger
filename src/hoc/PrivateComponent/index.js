import PrivateComponent from "./PrivateComponent";
import React from 'react';

export const  withAuthCheck = (Component) => {
    return class extends React.Component{
        render(){
            return (
            <PrivateComponent>
                <Component {...this.props}/>
            </PrivateComponent>
            )
        }
       }
};