import React from "react";
import styles from "./Button.module.scss";

function Button({ text, disabled = false, type = "button", onClick }) {
  return (
    <button
      disabled={disabled}
      className={styles.btn}
      type={type}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
}

export default Button;
