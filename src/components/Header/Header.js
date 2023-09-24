import React from "react";
import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton";
import HeaderCover from "../../assets/header.jpg";
const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <p>Food Shop</p>
        <HeaderButton />
      </header>
      <div className={styles["header-cover"]}>
        <img src={HeaderCover} alt="Foods" />
        <div className={styles["about"]}>
          <h2>Delicious food, delivered to you</h2>
          <p>
            Choose your desired meal from our menu and enjoy it at your home.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
