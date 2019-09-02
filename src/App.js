import React from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import BurgerBuilder from './conteiners/BurgerBuilder';
import Orders from './conteiners/Orders'
import Layout from "./hoc/Layout";
import Checkout from "./conteiners/Checkout";
import Auth from "./conteiners/Auth";

function App() {
  return (
      <Layout>

          <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Route path="/auth" component={Auth} />
              <Route path="/" exact component={BurgerBuilder} />
          </Switch>

      </Layout>

  );
}

export default App;
