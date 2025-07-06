import React, { useState } from "react";
import styles from "./TextField.module.scss";
import { emailRegex } from "~/constants/api";

const TextField = ({
  label,
  value,
  onChange,
  helperText,
  type = "text",
  pattern = ".*",
  inputRef,
  name,
}) => {
  const [firstInput, setFirstInput] = useState(false);
  const [error, setError] = useState("");
  const isFilled = value?.length > 0;

  const inputContainerClass = `${styles.inputContainer} ${
    isFilled ? styles.filled : ""
  }`;

  const showError = error !== "";

  const wrapperClass = `${styles.wrapper} ${showError ? styles.error : ""}`;

  const labelClass = `${styles.label} ${isFilled ? styles.float : ""}`;

  const helperClass = `${styles.helper} ${showError ? styles.errorText : ""}`;

  const handleBlur = (e) => {
    e.target.parentElement.classList.toggle(
      styles.focus,
      e.target.value !== ""
    );

    if (inputRef.current && !inputRef.current.checkValidity()) {
      setError(inputRef.current.validationMessage);
    } else {
      if (type === "email" && !emailRegex.test(inputRef.current.value)) {
        inputRef.current.setCustomValidity("Email is not in RFC2822 format!");
        setError("Email is not in RFC2822 format!");
        return;
      }
      setError("");
      inputRef.current.setCustomValidity("");
    }
  };

  const handleOnChange = (e) => {
    // for start giving errors
    if (!firstInput) setFirstInput(true);
    onChange(e);
  };

  const handleFocus = (e) => {
    e.target.parentElement.classList.add(styles.focus);
    setError("");
    inputRef.current.setCustomValidity("");
  };

  return (
    <div className={wrapperClass}>
      <div className={inputContainerClass}>
        <input
          ref={inputRef}
          pattern={pattern}
          type={type}
          value={value}
          onChange={handleOnChange}
          className={styles.input}
          onBlur={handleBlur}
          onFocus={handleFocus}
          required
          id={label}
          name={name}
        />
        <label className={labelClass} htmlFor={label}>
          {label}
        </label>
      </div>
      <div>
        <p className={helperClass}>{showError ? error : ""}</p>
        <p className={helperClass}>{helperText}</p>
      </div>
    </div>
  );
};

export default TextField;
