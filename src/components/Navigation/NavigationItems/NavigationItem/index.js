import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';
import { isAuthed, isGuest } from '../../../../hoc/PrivateComponent'

const NavigationItem = props => (
    <li className={ classes.NavigationItem }>
        <NavLink exact={ true } activeClassName={ classes.active } to={ props.link }>{ props.children }</NavLink>
    </li>
);
const PrivateNavigationItem = isAuthed(NavigationItem);
const PublicNavigationItem = isGuest(NavigationItem);

export { NavigationItem, PublicNavigationItem, PrivateNavigationItem };