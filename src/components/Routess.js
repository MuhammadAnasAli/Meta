import React from 'react'
// import { Route } from 'react-router'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import LoginForm from './LoginForm'
import SignUp from './SignUp'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

export default function Routess() {
    return (
       
      <Routes>
         <Route path="/" element={ <LoginForm/>}/>
         <Route path="/signup" element={ <SignUp/>}/>
         <Route path="/home" element={<Home/>}/>
      </Routes>
       
    )
}
