import React, { useContext } from "react";
import styles from "./Modal.module.css";
import Card from "../Meals Section/Card";
import BuyedItem from "./BuyedItem";
import ModalAction from "./ModalAction";
import { CartContext } from "../../store/CartContext";

const Modal = (props) => {
  const cartCtx = useContext(CartContext);
  function preventHandler(event) {
    event.stopPropagation();
  }
  function modalCloser(event) {
    props.onClose(false);
    document.body.style.overflow = "visible";
  }

  return (
    <div className={styles["modal-back"]} onClick={modalCloser}>
      <div onClick={preventHandler} className={styles["modal-container"]}>
        <Card>
          {cartCtx.items.map((item) => (
            <BuyedItem item={item} />
          ))}
          <ModalAction onClose={props.onClose} />
        </Card>
      </div>
    </div>
  );
};

export default Modal;
