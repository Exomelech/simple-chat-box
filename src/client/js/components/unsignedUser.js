import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import AuthForm from './authForm'; 

class Login extends React.Component {
  render() {
    return (
      <AuthForm type='login'/>
    );
  };
};

class Registration extends React.Component {
  render() {
    return (
      <AuthForm type='registration'/>
    );
  };
};

export default class UnsignedUser extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/unsigned/" render={ () => <Redirect to="/unsigned/login/"/> }/>
        <Route exact path="/unsigned/login/" component={Login}/>
        <Route exact path="/unsigned/registration/" component={Registration}/>
      </Router>
    )
  };
};