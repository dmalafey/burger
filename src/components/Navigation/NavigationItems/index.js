import React from 'react';

import classes from './NavigationItems.module.css';
import {PrivateNavigationItem} from "./NavigationItem";
import {PublicNavigationItem} from "./NavigationItem";



const NavigationItems = () => {

    return(
    <ul className={classes.NavigationItems}>
        <PrivateNavigationItem link="/" exact>Burger Builder</PrivateNavigationItem>
        <PrivateNavigationItem link="/orders">Orders</PrivateNavigationItem>
        <PublicNavigationItem link="/logout"> sign out </PublicNavigationItem>
    </ul>)
};

export default NavigationItems