import React from "react";
import styles from "./Header.module.scss";
import Logo from "~/assets/Logo.svg";
import Button from "../common/Button";

function Header() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <img src={Logo} alt="logo image" />
        <div className={styles.btnContainer}>
          <Button text="Users" />
          <Button text="Sign up" />
        </div>
      </div>
    </div>
  );
}

export default Header;
