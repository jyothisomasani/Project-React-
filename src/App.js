import logo from './logo.svg';
import React from 'react';
import './App.css';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
import {BrowserRouter as Router,Route,Routes,Switch} from 'react-router-dom'
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import Header from './Components/Header';
import Footercomponent from './Components/Footercomponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';

function App() {
  return (
    
    <div>
      <Router>
       
      <Header></Header>
    
    <div className="container">
      <Switch> 
        <Route path ="/" exact component={ListEmployeeComponent}></Route>
        <Route path="/employee" component={ListEmployeeComponent}></Route>
        <Route path="/add-employee" component={CreateEmployeeComponent}></Route> 
        <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route> 
        </Switch>
        </div>
      <Footercomponent></Footercomponent>
     
      </Router>
    </div>
 
  );
}

export default App;
