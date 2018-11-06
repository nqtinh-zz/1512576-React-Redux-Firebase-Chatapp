import React from 'react';
import LoginPage from './component/login';
import Users from './users/loadUser';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/user" component={Users} />
    </div>
  </Router>
)
export default App;
