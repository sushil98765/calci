import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return <input className Name={styles.display} type="text" value={displayValue} readOnly/>;
};

export default Display;