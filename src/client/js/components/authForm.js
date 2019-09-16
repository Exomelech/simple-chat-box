import { Link } from 'react-router-dom';
import data from '../../mocks/auth-form.json';

export default class AuthForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      login: '',
      password: '',
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
  
  handleSubmitButton(e){
    const { name, login, password } = this.state;
    const { name_pattern, pattern } = data[this.props.type];
    let name_regex = new RegExp(name_pattern);
    let pattern_regex = new RegExp(pattern);
    let request_data = {};
    e.preventDefault();
    console.log('Submited', name_regex,name.match(name_regex));
  };

  render() {
    const { type } = this.props;
    if( data[type] ){
      const { name, login, password } = this.state;
      const { name_pattern, pattern, form_title, button_title, nav_title, link } = data[type];
      return (
        <form className='auth-form'>
          <div className='auth-form__title'>{form_title}</div>
          { type==='registration' &&
            <div className='auth-form__block'>
              <input 
                type='text' 
                className='auth-form__input' 
                id='auth_name' 
                placeholder='Имя' 
                onChange={(e) => this.handleChangeName(e)}
                value={name}
                required pattern={name_pattern} minLength='3'></input>
            </div>
          }
          <div className='auth-form__block'>
            <input 
              type='text' 
              className='auth-form__input' 
              id='auth_login' 
              placeholder='Логин' 
              onChange={(e) => this.handleChangeLogin(e)}
              value={login}
              required pattern={pattern} minLength='3'></input>
          </div>
          <div className='auth-form__block'>
            <input 
              type='password' 
              className='auth-form__input' 
              id='auth_password' 
              placeholder='Пароль' 
              onChange={(e) => this.handleChangePassword(e)}
              value={password}
              required pattern={pattern} minLength="6"></input>
          </div>
          <button 
            className='auth-form__button-submit' 
            type="submit"
            onClick={(e) => this.handleSubmitButton(e)}
          >{button_title}</button> 
          <Link to={link} className='auth-form__button-link'>{nav_title}</Link>
        </form>
      );
    }else{
      return new Error(`Invalid form type ${type}`)
    }
  };
};