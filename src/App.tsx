import React from 'react';
import { Fragment,useState,useEffect } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Components/Pages/Home';
import {EditUser} from './Components/Pages/EditUser';
import { UserProps } from './Components/Pages/User';
import {AddUser} from './Components/Pages/AddUser'
import {ViewUser} from './Components/Pages/ViewUser';
import {About} from './Components/Layout/About'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/'  element={<Home />}/>
      <Route  path='/addUsers/' element={<AddUser/>}/>
      <Route path="/editusers/:id" element={<EditUser/>}/>
      <Route  path='/users/:id' element={<ViewUser/>}/>
      <Route  path="/users/:id/editusers/:id" element={<EditUser/>}/>
      <Route  path='/about' element={<About/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
