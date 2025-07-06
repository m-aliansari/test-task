import React, { useState } from "react";
import styles from "./PostRequestSection.module.scss";
import SignupForm from "./SignupForm";
import successImage from "~/assets/success-image.svg";

function PostRequestSection({ handleSuccessfulRegistration, positions }) {
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h1>Working with POST request</h1>
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <SignupForm
            positions={positions}
            setShowSuccess={setShowSuccess}
            handleSuccessfulRegistration={handleSuccessfulRegistration}
          />
        </div>
        {showSuccess && (
          <div className={styles.successContainer}>
            <h1>User successfully registered</h1>
            <img
              src={successImage}
              alt="User registeration successful image"
              className={styles.successImage}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostRequestSection;
