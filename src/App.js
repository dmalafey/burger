import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import BurgerBuilder from './conteiners/BurgerBuilder';
import Orders from './conteiners/Orders'
import Layout from "./hoc/Layout";


function App() {
  return (
      <Layout>
          <Router>
              <Route path="/orders" component={Orders} />
              <Route path="/" exact component={BurgerBuilder} />
         </Router>
      </Layout>

  );
}

export default App;
