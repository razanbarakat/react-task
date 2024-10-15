import React, { useState } from 'react'
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
  } from "firebase/auth";
import { auth } from '../firebase/config';
export default function Modal({closeModal}) {

  return (
    <div className="parent-of-model">
    <form className={`modal `}>
    <div
      onClick={() => {
        closeModal()
      }}
      className="close"
    >
      <i className="fa-solid fa-xmark"></i>
    </div>

    
  </form>
  </div>
  )
}


// {/* <input
//       onChange={(eo) => {
//         setresetPass(eo.target.value);
//       }}
//       required
//       placeholder=" E-mail : "
//       type="email"
//     />
//     <button
//       onClick={(eo) => {
//         eo.preventDefault();

//         sendPasswordResetEmail(auth, resetPass)
//           .then(() => {
//             console.log("send email");
//             setshowSendEmail(true);
//           })
//           .catch((error) => {
//             // ..
//           });
//       }}
//     >
//       Reset Password
//     </button>
//     {showSendEmail && (
//       <p className="check-email">
//         Please check your email to reset your password.
//       </p>
//     )} */}