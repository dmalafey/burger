import React from 'react';

import classes from './NavigationItem.module.css';
import {withAuthCheck} from '../../../../hoc/PrivateComponent'

const NavigationItem = ( props ) => (
    <li className={classes.NavigationItem}>
        <a
            href={props.link}
            className={props.active ? classes.active : null}>{props.children}</a>
    </li>
);
const PrivateNavigationItem = withAuthCheck(NavigationItem);
export {NavigationItem as PublicNavigationItem};
export  {PrivateNavigationItem};