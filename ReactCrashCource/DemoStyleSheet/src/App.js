import './App.css';
import './appStyles.css'
import { Inline } from './Components/inline';
import { StyleSheet } from './Components/Stylesheet';
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <div>
        <StyleSheet/>
        <Inline/>
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
      </div>
    </div>
  );
}

export default App;
