import React from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from "./pages/Home";
import Browse from './pages/Browse'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/browse' element={<Browse/>} /> 
      <Route path='/signin'  element={<SignIn/>} /> 
      <Route path='/signup' element={<SignUp/>}/>  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
