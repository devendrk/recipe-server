import React from "react";
import Modal from "react-modal";

import Form from "../Form/Form";
import Button from "../Button/Button";

import "./Modal.scss";

const FormModal = ({ modalIsOpen, handleClose }) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => handleClose(false)}
        className="modal"
        ariaHideApp={false}
      >
        <div className="modal__header">
          <div></div>
          <h5 className="modal__title">Add new recipe</h5>
          <div className="modal__closebtn">
            <Button
              handleClick={() => handleClose(false)}
              text="close"
              variant="danger"
            />
          </div>
        </div>
        <Form />
      </Modal>
    </>
  );
};

export default FormModal;
