import { BrowserRouter,Link,Route,Switch } from 'react-router-dom';
import styles from'./app.module.css';
import Login from './component/login/login';
import Maker from './component/maker/maker';


function App({authService}) {
  return (
    <div className={styles.app}>
    <BrowserRouter>
      <Switch>

          <Route exact path={["/","/login"]}>
            <Login authService={authService}/>
          </Route>

          <Route path="/maker">
              <Maker onLogout={authService}/>
          </Route>

        </Switch>
    </BrowserRouter>
     </div>
  );
}

export default App;
