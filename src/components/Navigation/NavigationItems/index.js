import React from 'react';

import classes from './NavigationItems.module.css';
import { PrivateNavigationItem, PublicNavigationItem } from "./NavigationItem";

const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <PrivateNavigationItem link="/" exact={ true }>Burger Builder</PrivateNavigationItem>
            <PrivateNavigationItem link="/orders">Orders</PrivateNavigationItem>
            <PrivateNavigationItem link="/logout"> Sign out </PrivateNavigationItem>
            <PublicNavigationItem link="/signin"> Sign in </PublicNavigationItem>
        </ul>
    );
};

export default NavigationItems