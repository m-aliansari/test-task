import React, { useState } from "react";
import styles from "./UploadField.module.scss";

export default function UploadField({
  value = "",
  onUpload,
  inputRef,
  placeholder = "Upload your photo",
  name,
}) {
  const [error, setError] = useState("");

  const handleButtonClick = () => {
    setError("");
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const files = e.target.files;

    //check if file exists
    if (files && files[0]) {
      //check if file selected was image or not
      if (files[0].type.startsWith("image/")) {
        onUpload(e.target.files[0]);
      } else {
        setError("Only image files are accepted");
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.field} ${error ? styles.error : ""}`}>
        <div className={styles.uploadBtnWrapper}>
          <button
            type="button"
            className={`${styles.uploadBtn} ${error ? styles.error : ""}`}
            onClick={handleButtonClick}
          >
            Upload
          </button>
        </div>
        <input
          type="file"
          ref={inputRef}
          className={styles.fileInput}
          onChange={handleChange}
          accept="image/jpeg, image/jpg"
          name={name}
        />
        <div className={styles.textArea}>
          <span className={styles.text}>{value ? value : placeholder}</span>
        </div>
      </div>
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}
