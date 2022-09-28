import React, { useState } from 'react'
import '../style.scss' 
import Add from '../img/add_image.png'

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth,db,storage } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc , setDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'


const Registers = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(e.target[0].value)
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          setErr(true);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL:downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );

    }catch(err){
      setErr(true)
    }
  }



  return (
    <div className='container1' >
      <div className='container2' >
        <span className="logo">Chatting Application</span>
        <span className="title">Sign up</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='your email' />
          <input type="password" placeholder='passowrd' />
          
          <input style={{display:"none"}} id='file' type="file" />
          <label htmlFor='file'>
            <img src={Add} alt="add avatar" />
            <span>Add a avatar</span>
          </label>
          <button>Sign Up</button>
          
          {/* error */}
          {err && <span>Something went wrong</span>}


        </form>
        <p>You already have account ? <Link to="/login">Login</Link> </p>
      </div>
    </div>
  )
}

export default Registers