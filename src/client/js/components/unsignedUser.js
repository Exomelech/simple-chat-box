import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import AuthForm from './authForm'; 

class Login extends React.Component {
  render() {
    const { login } = this.props;
    return (
      <AuthForm type='login' loginFunc={login}/>
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

  // constructor(props){
  //   super(props);
  // };

  render() {
    const { login } = this.props;
    return (
      <Router>
        <Route exact path="/unsigned/" render={ () => <Redirect to="/unsigned/login/"/> }/>
        <Route exact path="/unsigned/login/" render={ () => <Login login={login}/> }/>
        <Route exact path="/unsigned/registration/" component={Registration}/>
      </Router>
    )
  };
};