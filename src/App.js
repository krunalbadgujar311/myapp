import React, { useContext } from 'react';
import Register from './Pages/Register';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar"
import Chat from "./Components/Chat"
import Chats from "./Components/Chats"
import Input from "./Components/Input"
import Message from "./Components/Message"
import Navbar from "./Components/Navbar"
import Search from "./Components/Search"

import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import './style.scss';
import Messages from './Components/Messages';
import { AuthContext } from './context/AuthContext';
function App(){

  const {currentUser}=useContext(AuthContext)

  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to="/"/>;
    }

    return children
  };

  console.log(currentUser)
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/chats" element={<Chats/>}/>
          <Route path="/input" element={<Input/>}/>
          <Route path="/message" element={<Message/>}/>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/sidebar" element={<Sidebar/>}/>
          <Route path="/messages" element={<Messages/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;