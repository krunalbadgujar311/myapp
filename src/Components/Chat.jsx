import React, { useContext } from 'react'
import Cam from "../Image/cam.png"
import Add from "../Image/add.png"
import More from "../Image/more.png"
import Messages from "./Messages"
import Input from './Input'
import { ChatContext } from '../context/ChatContext'
const Chat = () => {
  const {data}=useContext(ChatContext)
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="कॅमेरा"/>
          <img src={Add} alt="अजुन"/>
          <img src={More} alt="अधिक"/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
