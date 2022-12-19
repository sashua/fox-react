import Counter from 'components/Counter';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <main className={styles.app}>
      <Counter />
    </main>
  );
}

export default App;
