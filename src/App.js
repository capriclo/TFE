import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import NewArticle from './Components/NewArticle/NewArticle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Client from './Components/Client/Client';
import NewClient from './Components/NewClient/NewClient';
import Basket from './Components/Basket/Basket';
import OutOfStock from './Components/OutOfStock/OutOfStock';
import Order from './Components/Order/Order'
import ArchivedSuppliers from './Components/ArchivedSuppliers/ArchivedSuppliers'


function App() {
  return (
      <BrowserRouter> 
        <Navbar />
        <Switch>
          <Route exact path="/backet" component={Basket} />
          <Route exact path="/articles" component={NewArticle} />
          <Route exact path="/clients" component={Client} />
          <Route exact path="/new_client" component={NewClient} />
          <Route exact path="/out-of-stocks" component={OutOfStock} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/supplier" component={ArchivedSuppliers} />
        </Switch>
       
      </BrowserRouter>

      
  );
}

export default App;

