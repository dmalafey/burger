import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import BurgerBuilder from './conteiners/BurgerBuilder';
import Orders from './conteiners/Orders'
import Layout from "./hoc/Layout";
import Checkout from "./conteiners/Checkout";


function App() {
  return (
      <Layout>

          <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Route path="/" exact component={BurgerBuilder} />
          </Switch>

      </Layout>

  );
}

export default App;
