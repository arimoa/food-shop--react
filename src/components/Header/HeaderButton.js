import React, { useState, useContext } from "react";
import styles from "./HeaderButton.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";
import { CartContext } from "../../store/CartContext";

const HeaderButton = () => {
  const cartCtx = useContext(CartContext);
  const itemNumbers = cartCtx.items.reduce((total, current) => {
    return total + current.amount;
  }, 0);
  const modalElement = document.getElementById("modal");
  const [isOpne, setIsOpen] = useState(false);
  function modalOpener() {
    setIsOpen(true);
    document.body.style.overflow = "unset";
  }
  return (
    <React.Fragment>
      <button onClick={modalOpener} className={styles["cart-button"]}>
        <AiOutlineShoppingCart />
        <span>Your Cart</span>
        <span>{itemNumbers}</span>
      </button>
      {isOpne && createPortal(<Modal onClose={setIsOpen} />, modalElement)}
    </React.Fragment>
  );
};

export default HeaderButton;
