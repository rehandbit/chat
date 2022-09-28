import React from 'react'
import Cam from '../img/cam.png';
import Add from '../img/add-user.png'
import Option from '../img/option.png'
import Messages from './Messages';
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatName">
        <span>jane</span>
        <div className="icon">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={Option} alt="" />
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat