import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import NewArticle from './Components/NewArticle/NewArticle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Client from './Components/Client/Client'

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path="/articles" component={NewArticle} />
        <Route exact path="/clients" component={Client} />
        </Switch>
         
       
      </BrowserRouter>

      
  );
}

export default App;

