import './app.css';
import Login from './component/login/login';


function App({authService}) {
  return (
    <div className="App">
      <h1>hello</h1>
      <Login authService={authService}/>
    </div>
  );
}

export default App;
