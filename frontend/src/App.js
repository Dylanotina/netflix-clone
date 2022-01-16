import React from "react";
import {Route, Routes} from 'react-router'
import Home from "./pages/Home";
import Browse from './pages/Browse'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/browse' element={<Browse/>} /> 
      <Route path='/signin'  element={<SignIn/>} /> 
      <Route path='/signup' element={<SignUp/>}/>  
      </Routes>
    </div>
  );
}

export default App;
