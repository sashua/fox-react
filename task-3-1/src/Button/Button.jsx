import styles from "./Button.module.css";

function Button({ icon: Icon, onClick }) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      <Icon className={styles.icon} />
    </button>
  );
}

export default Button;
