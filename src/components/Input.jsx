import styles from './Input.module.css';

function Input({ label, type = 'text', placeholder, value, onChange, id }) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
}

export default Input;
