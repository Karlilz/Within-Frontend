// Import necessary modules
import React from 'react';
import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";

// Import your components
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import App from './App';
import Welcome from './pages/Welcome';

// Main Router component
const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
            <Route path='/Within' element={<Welcome/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Route>
      </>
    )
  );
  
  export default router;
