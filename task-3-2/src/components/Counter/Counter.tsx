import { useAppDispatch, useAppSelector } from 'components/App';
import Button from 'components/Button';
import { TiMinus, TiPlus } from 'react-icons/ti';
import styles from './Counter.module.css';
import { decrement, increment } from './counterSlice';

function Counter(): JSX.Element {
  const value = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Redux Toolkit</h2>
      <p className={styles.value}>{value}</p>
      <div className={styles.buttons}>
        <Button icon={TiMinus} onClick={() => dispatch(decrement())} />
        <Button icon={TiPlus} onClick={() => dispatch(increment())} />
      </div>
    </div>
  );
}

export default Counter;
