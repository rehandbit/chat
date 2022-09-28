import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'

const Chats = () => {

  const [chats, setChats] = useState([])
  const {currentUser} = useContext(AuthContext)

  useEffect(() => {
    const getChats = () => {

      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
    })
    return() => {
      unsub();
    }
  }
  currentUser.uid && getChats()
  }, [currentUser.uid])

  console.log(chats);

  return (
    <div className="chats">
      <div className="userChat">
        <img src="https://images.pexels.com/photos/13099181/pexels-photo-13099181.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
        <div className="userChatInfo">
          <span>jene</span>
          <p>helo</p>
        </div>
      </div>
    </div>
  )
}

export default Chats