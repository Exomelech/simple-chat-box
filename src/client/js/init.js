import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from 'react-router';
import App from './App';
import Main from './components/main';
import Client from './client_logic';

Client.initLoad();

ReactDOM.render(
  <App>
    <Router>
      <Route exact path="/" render={() => (
        Client.isLoggedIn() ? (
          <Main client={Client}/>
        ) : (
          <Redirect to="/login/"/>
        )
      )}/>
      <Route exact path="/login/" render={()=>{
        return(
          <div>Pls login</div>
        )
      }}/>
    </Router>
  </App> , document.getElementById("root")
);