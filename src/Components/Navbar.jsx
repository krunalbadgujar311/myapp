import React, { useContext } from 'react';
import {signOut} from "firebase/auth";
import { auth } from '../Firebase';
import {AuthContext} from "../context/AuthContext";
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className="nav">
    <div className="Signlogo">
      <img src="https://assets.letsendorse.com/le/1569936014_MLLzYtBtFMUGOyhkCD_15699360147541/2020/08/24/mffJn15982450052120.png"/>
    </div>
    
    <div className="user">
        <img src={currentUser.photoURL}
         alt=""/>
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>बाहेर</button>
    </div>
      नेव्हिगेशन बार
    </div>
  )
}

export default Navbar
