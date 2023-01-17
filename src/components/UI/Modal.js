import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const ModalBackdrop = (props) => <div className={classes.backdrop} onClick={props.hideCart}></div>;
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content} >
        <h3>{props.children}</h3>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      { ReactDOM.createPortal(<ModalBackdrop hideCart={props.hideCart} />,document.getElementById('overlays')) }
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </>
  );
};

export default Modal;
