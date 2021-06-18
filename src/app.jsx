import { BrowserRouter,Link,Route,Switch } from 'react-router-dom';
import styles from'./app.module.css';
import Login from './component/login/login';
import Maker from './component/maker/maker';


function App({Fileput,authService, cardRepository}) {
  return (
    <div className={styles.app}>
    <BrowserRouter>
      <Switch>

          <Route exact path={["/","/login"]}>
            <Login authService={authService}/>
          </Route>

          <Route path="/maker">
              <Maker authService={authService} Fileput={Fileput} cardRepository={cardRepository}/>
          </Route>

        </Switch>
    </BrowserRouter>
     </div>
  );
}

export default App;
