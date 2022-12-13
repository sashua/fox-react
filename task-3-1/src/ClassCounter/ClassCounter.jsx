import { Component } from 'react';
import { TiPlus, TiMinus } from 'react-icons/ti';
import Button from 'Button';
import styles from './ClassCounter.module.css';

class ClassCounter extends Component {
  state = {
    value: 0,
  };

  changeValue = change =>
    this.setState(prevState => ({
      value: prevState.value + change,
    }));

  render() {
    return (
      <div className={styles.box}>
        <h2 className={styles.title}>Class</h2>
        <p className={styles.value}>{this.state.value}</p>
        <div className={styles.buttons}>
          <Button icon={TiMinus} onClick={() => this.changeValue(-1)} />
          <Button icon={TiPlus} onClick={() => this.changeValue(1)} />
        </div>
      </div>
    );
  }
}

export default ClassCounter;
