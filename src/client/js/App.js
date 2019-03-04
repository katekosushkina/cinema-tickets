import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './Components/Home/home';
import Order from './Components/Order/order';
import OpenPage from './Components/openPages/openPage'

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/order" exact component={Order}/>
      <Route path="/films" exact component={OpenPage}/>
      <Route path="/cinema" exact component={OpenPage}/>
    </div>
  </Router>
);

export default AppRouter;
