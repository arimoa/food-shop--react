import React, { useRef, useContext } from "react";
import styles from "./FoodItem.module.css";
import { CartContext } from "../../store/CartContext";

const FoodItem = (props) => {
  const cartCtx = useContext(CartContext);
  const inputRef = useRef();
  function addInputHandler(event) {
    event.target.style.transform = "scaleX(1.15)";
    if (
      inputRef.current.value.length !== 0 &&
      inputRef.current.value.trim() !== 0 &&
      +inputRef.current.value > 0 &&
      +inputRef.current.value <= 5
    ) {
      cartCtx.addItem({
        id: props.item.id,
        name: props.item.name,
        description: props.item.description,
        price: props.item.price,
        amount: +inputRef.current.value,
      });
    } else {
      alert("You can only enter a bumber between 1-5 as an amount");
    }
    setTimeout(() => (event.target.style.transform = "scaleX(1)"), 350);
  }
  return (
    <div className={styles["food-container"]}>
      <div className={styles["item-information"]}>
        <p className={styles["item-name"]}>{props.item.name}</p>
        <p className={styles["item-description"]}>{props.item.description}</p>
        <p className={styles["item-price"]}>${props.item.price}</p>
      </div>
      <div className={styles["item-actions"]}>
        <div className={styles["item-amount"]}>
          <span>Amount</span>
          <input
            ref={inputRef}
            type="number"
            placeholder="1-5"
            min={1}
            max={5}
            step={1}
          ></input>
        </div>
        <button
          onClick={addInputHandler}
          type="button"
          className={styles["btn-item-add"]}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
