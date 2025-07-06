import { useEffect, useRef, useState } from "react";
import styles from "./SignupForm.module.scss";
import TextField from "./TextField";
import RadioGroup from "./RadioGroup";
import UploadField from "./UploadField";
import Button from "~/components/common/Button";
import { registerUser } from "~/api/users";

function SignupForm({
  setShowSuccess,
  handleSuccessfulRegistration,
  positions,
}) {
  const [position, setPosition] = useState(null);
  const positionInputRef = useRef(null);
  const [name, setName] = useState("");
  const nameInputRef = useRef(null);
  const [email, setEmail] = useState("");
  const emailInputRef = useRef(null);
  const [phone, setPhone] = useState("");
  const phoneInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleOnUpload = (file) => {
    setFileName(file?.name ?? "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const success = await registerUser(formData);
    if (success) {
      setShowSuccess(true);
      handleSuccessfulRegistration();
    } else {
      window.alert(
        "Some internal error occured. Kindly submit again or contact support!"
      );
    }
    // setPhone("");
    // setEmail("");
    // setName("");
    // setFileName("");
    // setFile(null);
    // setPosition("frontend");
    setLoading(false);
  };

  useEffect(() => {
    if (positions?.length) setPosition(positions[0].id);
  }, [positions]);

  useEffect(() => {
    if (
      fileInputRef.current.checkValidity() &&
      fileName &&
      positionInputRef.current.checkValidity() &&
      position &&
      nameInputRef.current.checkValidity() &&
      name &&
      emailInputRef.current.checkValidity() &&
      email &&
      phoneInputRef.current.checkValidity() &&
      phone
    )
      setBtnDisabled(false);
    else setBtnDisabled(true);
  }, [fileName, position, name, email, phone]);

  useEffect(() => {
    setBtnDisabled(loading);
  }, [loading]);

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <TextField
          label="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          inputRef={nameInputRef}
          name="name"
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputRef={emailInputRef}
          name="email"
        />
        <div>
          <TextField
            label="Phone"
            type="tel"
            helperText="+38 (XXX) XXX - XX - XX"
            pattern="\+380[0-9]{9}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            inputRef={phoneInputRef}
            name="phone"
          />
          <div style={{ marginTop: "29px" }}>
            <RadioGroup
              inputRef={positionInputRef}
              label="Select your position"
              selected={position}
              onChange={(e) => setPosition(parseInt(e.target.value))}
              options={positions}
              name="position_id"
            />
          </div>
          <div style={{ marginTop: "47px" }}>
            <UploadField
              inputRef={fileInputRef}
              value={fileName}
              onUpload={handleOnUpload}
              name="photo"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            text={"Sign up"}
            disabled={btnDisabled}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
