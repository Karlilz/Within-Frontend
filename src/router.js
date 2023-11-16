// Modules
import React from 'react';
import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";

// Components
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import App from './App';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import JournalNew from './pages/JournalNew';
import Goal from './pages/Goal'
import Profile from './pages/Profile';
import Logout from './components/Logout';

const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App/>}>
            <Route path="home" element={<Home/>}/>
            <Route path='/Within' element={<Welcome/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/journal" element={<JournalNew/>}/>
            <Route path="/goal" element={<Goal/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/logout' element={<Logout/>}/>
        </Route>
      </>
    )
  );
  
  export default router;
