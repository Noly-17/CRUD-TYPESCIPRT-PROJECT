import React from 'react';
import './SignUp.scss';
interface appProps {
  closeModal: any;
}
function SignP({ closeModal }: appProps) {
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
          <input placeholder="username" />
          <input placeholder="username" />
          <input placeholder="email" />
          <input placeholder="password" />
          <button>SignUp</button>
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
