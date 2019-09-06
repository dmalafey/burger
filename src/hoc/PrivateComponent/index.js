import React from 'react';

import PrivateComponent from "./PrivateComponent";
import PublicComponent from './PublicComponent';

export const  isAuthed = (Component) => {
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

export const  isGuest = (Component) => {
    return class extends React.Component{
        render(){
            return (
            <PublicComponent>
                <Component {...this.props}/>
            </PublicComponent>
            )
        }
       }
};