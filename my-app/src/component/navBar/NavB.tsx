import React, { useState } from 'react';
import SignP from '../signUp/SignP';

function NavB() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="signUp">
        <button
          className="openModalSignUp"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Sign Up
        </button>
      </div>
      {openModal && <SignP closeModal={setOpenModal} />}
    </div>
  );
}

export default NavB;
