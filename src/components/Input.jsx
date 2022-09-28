import React from 'react'
import ImgIcon from '../img/image.png'
import Attach from '../img/attach-paperclip-symbol.png'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type your message' />
      <div className="send">
        <img src={Attach} alt=" image" />
        <input type="file" style={{display: "none"}} id="file" />
        <label htmlFor='file' >
          <img src={ImgIcon} alt="file attach" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input