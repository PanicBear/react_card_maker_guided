import "./app.module.css";
import Login from "./component/login/login";
import styles from './app.module.css';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Login authService={authService} />
    </div>
  );
}

export default App;
