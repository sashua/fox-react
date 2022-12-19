import { IconType } from 'react-icons';
import styles from './Button.module.css';

type ButtonProps = {
  icon: IconType;
  onClick: () => void;
};

function Button({ icon: Icon, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      <Icon className={styles.icon} />
    </button>
  );
}

export default Button;
