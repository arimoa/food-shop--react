import React, { useContext } from "react";
import styles from "./ModalAction.module.css";
import { CartContext } from "../../store/CartContext";

const ModalAction = (props) => {
  const cartCtx = useContext(CartContext);
  function modalCloser() {
    props.onClose(false);
    document.body.style.overflow = "visible";
  }
  return (
    <React.Fragment>
      <div className={styles["modal-price-section"]}>
        <p>Total price:</p>
        <p>${cartCtx.totalPrice.toFixed(2)}</p>
      </div>
      <div className={styles["modal-actions"]}>
        <button onClick={modalCloser}>Close</button>
        <button>Buy</button>
      </div>
    </React.Fragment>
  );
};

export default ModalAction;
