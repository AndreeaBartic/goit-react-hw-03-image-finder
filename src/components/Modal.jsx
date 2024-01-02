import React from 'react';

const Modal = ({ imageUrl }) => {
  return (
    <>
      <div class="overlay">
        <div class="modal">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </>
  );
};

export default Modal;
