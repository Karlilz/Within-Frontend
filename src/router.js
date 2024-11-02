import React from 'react';
import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import App from './App';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
// import Goal from './pages/Goal'
import Goal2 from './pages/Goal2';
import Logout from './components/Logout';
// import Journal from './pages/Journal';
import Journal2 from './pages/Journal2';

const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App/>}>
            <Route path="/home" element={<Home/>}/>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/within' element={<Welcome/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path='/journal' element={<Journal2/>}/>
            <Route path="/goal" element={<Goal2/>}/>
            <Route path='/logout' element={<Logout/>}/>
        </Route>
      </>
    )
  );
  
  export default router;
