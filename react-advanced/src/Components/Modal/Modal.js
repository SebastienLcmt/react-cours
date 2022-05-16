import React, { useState } from "react";
import "./Modal.css";
export default function Modal() {
  const [modal, setmodal] = useState(false);

  const toggleModal = () => {
    setmodal(!modal);
  };
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open modal
      </button>
      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Hello Modale</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente cupiditate voluptatem tempora quae rem iusto illum
                tenetur asperiores aperiam possimus consequuntur voluptate culpa
                earum assumenda, minima laborum soluta placeat corrupti quod
                laudantium nobis autem ad quo provident. Sunt eligendi qui
                dolorum dicta maxime beatae, totam voluptatibus eos recusandae?
                Vel, porro.
              </p>
              <button onClick={toggleModal} className="close-modal">
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
