import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import data from '../../mocks/auth-form.json';
import { request } from '../functions.js';

export default class AuthForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      login: '',
      password: '',
      type: props.type,
      redirect: ''
    };
  };

  handleChangeName(e){
    this.setState({
      name: e.target.value
    });
  };

  handleChangeLogin(e){
    this.setState({
      login: e.target.value
    });
  };

  handleChangePassword(e){
    this.setState({
      password: e.target.value
    });
  };
  
  hadleSubmitLogin(login, password){
    let regexp = new RegExp( data.pattern );
    if( ( login.match(regexp) && login.length >= 3 ) && ( password.match(regexp) && password.length >= 6 ) ){
      return {
        login: login, 
        password: password
      };
    }else{
      return false;
    };
  };

  hadleSubmitRegistration(name, login, password){
    let regexp = new RegExp( data.name_pattern );
    if( name.match(regexp) && name.length >= 3 ){
      let ret = this.hadleSubmitLogin(login, password);
      ret.name = name;
      return ret;
    }else{
      return false;
    };
  };

  handleSubmitButton(e){
    e.preventDefault();
    const { loginFunc } = this.props;
    const {type, name, login, password} = this.state;
    let request_data;
    if( type === 'login' ){
      request_data = this.hadleSubmitLogin(login, password);
    }else{
      request_data = this.hadleSubmitRegistration(name, login, password);
    };
    console.log( type, request_data )
    if( request_data ){
      loginFunc('Bob', 1);
      // request('post', `/auth`, request_data)
      // .then( res => {
      //   if( res.status === 'ok' ){
      //     if( type==='login' ){
      //       client.initLogin(res);
            // this.setState({
            //   redirect: '/'
            // });
      //     }else{

      //     };
      //   };
      // });
    };
  };

  render() {
    const { type } = this.state;
    if( data[type] ){
      const { name, login, password, redirect } = this.state;
      const { name_pattern, pattern } = data;
      const { form_title, button_title, nav_title, link } = data[type];
      return (
        <form className='auth-form'>
          <div className='auth-form__title'>{form_title}</div>
          { type==='registration' &&
            <div className='auth-form__block'>
              <input type='text' className='auth-form__input' id='auth_name' placeholder='Имя' onChange={(e) => this.handleChangeName(e)} value={name} required pattern={name_pattern} minLength='3'></input>
            </div>
          }
          <div className='auth-form__block'>
            <input type='text' className='auth-form__input' id='auth_login' placeholder='Логин' onChange={(e) => this.handleChangeLogin(e)} value={login} required pattern={pattern} minLength='3'></input>
          </div>
          <div className='auth-form__block'>
            <input type='password' className='auth-form__input' id='auth_password' placeholder='Пароль' onChange={(e) => this.handleChangePassword(e)} value={password} required pattern={pattern} minLength="6"></input>
          </div>
          <button className='auth-form__button-submit' type="submit" onClick={(e) => this.handleSubmitButton(e)}>{button_title}</button> 
          {/* { redirect!=='' && <Redirect to={redirect}/> } */}
          <Link to={link} className='auth-form__button-link'>{nav_title}</Link>
        </form>
      );
    };
  };
};