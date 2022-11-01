import { Route, Routes } from 'react-router-dom';
import  { useState } from "react";
import Feed from './Feed';
import './App.css';
import Login from './Login';
import { createContext } from "react";
import Signup from './Signup';
export const Datastore=createContext();
function App() {
  const[logdata,setLogdata]=useState([])
  return (
    <div className="App">
      <Datastore.Provider value={(logdata,setLogdata)}>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/Login' element={<Login/>}/>
        {/* <Route path='/Feed' element={<Feed/>}/> */}
      </Routes>
      </Datastore.Provider>
    </div>
  );
}

export default App;
