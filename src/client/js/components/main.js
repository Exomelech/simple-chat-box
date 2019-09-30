import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from 'react-router';
import Header from './header';
import Body from './body';
import UnsignedUser from './unsignedUser';
import Cookies from 'js-cookie';

export default class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      name: '',
      id: 0
    };
  };

  login(name, id){
    console.log( 'Client logged in', name, id )
    this.setState({
      loggedIn: true,
      name: name,
      id: id
    });
  };

  render() {
    const { loggedIn } = this.state;
    console.log(loggedIn)
    return (
      <Router>
        <Route exact path="/" render={() => (
          loggedIn ? (
            <div className='wrapper'>
              <Header/>
              <Body/>
            </div>
          ) : (
            <Redirect to="/unsigned/"/>
          )
        )}/>
        <Route exact path="/unsigned/" render={() => (
          <UnsignedUser login={(name, id) => this.login(name, id)}/>
        )}/>
      </Router>
    );
  };
};

{/* <Route exact path="/unsigned/" render={() => (
  <UnsignedUser client={Client}/>
  )}/> */}