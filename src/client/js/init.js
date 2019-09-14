import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from 'react-router';
import App from './App';
import UnsignedUser from './components/unsignedUser';
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
          <Redirect to="/unsigned/"/>
        )
      )}/>
      <Route exact path="/unsigned/" component={UnsignedUser} client={Client}/>
    </Router>
  </App> , document.getElementById("root")
);