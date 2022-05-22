import React, { useState } from 'react';
import axios from 'axios'
import './SignUp.scss';
interface appProps {
  closeModal: any;
}
function SignP({ closeModal }: appProps) {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: ""
  })


  const handleSubmit = ( ) => {
    try{
      axios.post('http://localhost:4000/api/auth/register', userDetails)
      console.log('success')
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">Create Account</div>
        <div className="body">
          <input placeholder="First Name" onChange={(e) => setUserDetails({
            ...userDetails,
            firstName: e.target.value })}/>
          <input placeholder="Last Name" onChange={(e) => setUserDetails({
            ...userDetails,
            lastName: e.target.value })}/>
          <input placeholder="Email" onChange={(e) => setUserDetails({
            ...userDetails,
            userName: e.target.value })}/>
          <input placeholder="Password" onChange={(e) => setUserDetails({
            ...userDetails,
            password: e.target.value })}/>
          <button onClick={handleSubmit} style={{ cursor: 'pointer'}}>SignUp</button>
        </div>
        <div className="footer">
          <p>
            Already have an Account? <a href="/">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default SignP;
