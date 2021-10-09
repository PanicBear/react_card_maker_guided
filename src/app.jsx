import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.module.css";
import styles from "./app.module.css";
import Login from "./component/login/login";
import Maker from "./component/maker/maker";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route exact path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
