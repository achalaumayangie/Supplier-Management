import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import HomeA from './components/HomeA';
import NavBar from './components/NavBar';
import CreateSupplier from './components/CreateSupplier';
import EditSupplier from './components/EditSupplier';
import SupplierHome from './components/SupplierHome';
import SupplierDetails from './components/SupplierDetails';

export default class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
           <div className="container">
           <NavBar/>
           <Route path="/" exact component={HomeA}></Route>
           <Route path="/supplierH" exact component={SupplierHome}></Route>
        <Route path="/addsup" exact component={CreateSupplier}></Route>
        <Route path="/editsup/:id" exact component={EditSupplier}></Route>
        <Route path="/supplier/:id" exact component={SupplierDetails}></Route>
        
           </div>
         </BrowserRouter>
        
      </div>
    )
  }
}
