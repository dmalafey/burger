import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import BurgerBuilder from './conteiners/BurgerBuilder';
import Orders from './conteiners/Orders'
import Layout from "./hoc/Layout";
import Checkout from "./conteiners/Checkout";
import Auth from "./conteiners/Auth";
import LogOut from "./conteiners/LogOut";
import PrivateRoute from "./PrivateRoute"
import {isAuth} from "./utility";


function App() {
  return (
      <Layout>

          <Switch>
              <PrivateRoute path="/checkout" redirectPath = "/signin" exact={true} component={Checkout} pred={isAuth}/>
              <PrivateRoute path="/orders" redirectPath = "/signin" exact={true} component={Orders} pred={isAuth}/>
              <Route path="/signin"  component= {Auth}/>
              <Route path ="/logout" component = {LogOut} />
              <PrivateRoute path="/" redirectPath = "/signin" exact={true} component={BurgerBuilder} pred={isAuth}/>
          </Switch>

      </Layout>

  );
}

export default App;
