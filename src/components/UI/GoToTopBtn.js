import React, { useState, useEffect } from "react";
import styles from "./GoToTopBtn.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollButton() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollButton && (
        <button className={styles["scroll-button"]} onClick={scrollToTop}>
          <AiOutlineArrowUp />
        </button>
      )}
    </div>
  );
}

export default ScrollButton;
