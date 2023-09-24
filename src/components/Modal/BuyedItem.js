import React, { useContext } from "react";
import styles from "./BuyedItem.module.css";
import { CartContext } from "../../store/CartContext";

const BuyedItem = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={styles["modal-item-container"]}>
      <div className={styles["buyed-item"]}>
        <p className={styles["buyed-item-name"]}>{props.item.name}</p>
        <div className={styles["buyed-item-costs"]}>
          <span className={styles["buyed-item-price"]}>
            ${props.item.price}
          </span>
          <span className={styles["buyed-item-amount"]}>
            x{props.item.amount}
          </span>
        </div>
      </div>
      <div className={styles["buyed-item-actions"]}>
        <button onClick={() => cartCtx.omitItem(props.item.id)}>-</button>
        <button
          onClick={() =>
            cartCtx.addItem({
              id: props.item.id,
              name: props.item.name,
              description: props.item.description,
              price: props.item.price,
              amount: props.item.amount + 1,
            })
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BuyedItem;
