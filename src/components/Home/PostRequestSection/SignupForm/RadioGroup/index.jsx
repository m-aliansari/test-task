import styles from "./RadioGroup.module.scss";

export default function RadioGroup({
  selected,
  onChange,
  options,
  inputRef,
  name,
}) {
  return (
    <div className={styles.radioGroup}>
      <label className={styles.label}>Select your position</label>
      <div className={styles.options}>
        {options.map((option) => (
          <label key={option.id} className={styles.option}>
            <input
              required
              ref={inputRef}
              type="radio"
              value={option.id}
              checked={selected === option.id}
              onChange={onChange}
              className={styles.input}
              name={name}
              id="position"
            />
            <span className={styles.customRadio}></span>
            <span className={styles.text}>{option.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
