import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import LoginPage from './../src/Pages/LoginPage';
import RegisterPage from './../src/Pages/RegisterPage';
import HomePage from './../src/Pages/HomePage';
import ViewPage from './../src/Pages/ViewPage';
import { useState } from 'react';
import UserContext from './Pages/UserContext';

function App() {
   
   const[valid,setValid]=useState('');

  return (
    <div className="App">
       <UserContext.Provider value={{valid,setValid}}>
       <BrowserRouter>
          <Routes>
             <Route path="/" element={valid?.status=="success"?<Navigate to="/home" replace/>:<LoginPage/>}></Route>
             <Route path="/home" element={<HomePage/>}></Route>
             <Route path="/register" element={<RegisterPage/>}></Route>
             <Route path="/view" element={<ViewPage/>}></Route>
             <Route path="/logout" element={<LoginPage/>}></Route>
          </Routes>
       </BrowserRouter>
       </UserContext.Provider>
    </div>
  );
}

export default App;
