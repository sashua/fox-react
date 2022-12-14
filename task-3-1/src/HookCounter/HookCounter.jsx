import { useState } from 'react';
import { TiPlus, TiMinus } from 'react-icons/ti';
import Button from 'Button';
import styles from './HookCounter.module.css';

function HookCounter() {
  const [value, setValue] = useState(0);

  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Functional</h2>
      <p className={styles.value}>{value}</p>
      <div className={styles.buttons}>
        <Button icon={TiMinus} onClick={() => setValue(value => value - 1)} />
        <Button icon={TiPlus} onClick={() => setValue(value => value + 1)} />
      </div>
    </div>
  );
}

export default HookCounter;
