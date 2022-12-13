import HookCounter from 'HookCounter';
import ClassCounter from 'ClassCounter';
import styles from './App.module.css';

function App() {
  return (
    <main className={styles.app}>
      <ClassCounter />
      <HookCounter />
    </main>
  );
}

export default App;
