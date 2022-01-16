import React from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from "./pages/Home";
import Browse from './pages/Browse'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import {IsUserRedirect,ProtectedRoute} from './helpers/routes'
import { useAuthListener } from "./hooks";

function App() {
  const user = useAuthListener()

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/browse' element={<ProtectedRoute user={user}><Browse/></ProtectedRoute>} /> 
      <Route path='/signin'  element={<IsUserRedirect user={user}><SignIn/></IsUserRedirect>} /> 
      <Route path='/signup' element={<IsUserRedirect user={user}><SignUp/></IsUserRedirect>}/>  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
