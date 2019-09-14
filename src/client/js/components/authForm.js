import { Link } from 'react-router-dom';

export default class AuthForm extends React.Component {
  render() {
    const { type } = this.props;
    const name_pattern = '^[А-Яа-яA-Za-z0-9_-]+$'
    const pattern = '^[A-Za-z0-9]+$'
    if( type==='registration' || type==='login' ){
      let form_title = type==='login' ? 'Вход на сайт' : 'Регистрация';
      let button_title = type==='login' ? 'Войти' : 'Зарегистрироваться';
      let nav_title = type==='login' ? 'Ещё не зарегестрированы?' : 'Уже зарегестрированы?';
      let link = type==='login' ? '/unsigned/registration/' : '/unsigned/login/';
      return (
        <form className='auth-form' name='login_form'>
          <div className='auth-form__title'>{form_title}</div>
          { type==='registration' &&
            <div className='auth-form__block'>
              <input type='text' className='auth-form__input' id='auth_name' placeholder='Имя' required pattern={name_pattern} minLength='3'></input>
            </div>
          }
          <div className='auth-form__block'>
            <input type='text' className='auth-form__input' id='auth_login' placeholder='Логин' required pattern={pattern} minLength='3'></input>
          </div>
          <div className='auth-form__block'>
            <input type='password' className='auth-form__input' id='auth_password' placeholder='Пароль' required pattern={pattern} minLength="6"></input>
          </div>
          <button className='auth-form__submit' type="submit">{button_title}</button> 
          <Link to={link} className='auth-form__navButton'>{nav_title}</Link>
        </form>
      );
    }else{
      return new Error(`Invalid form type ${type} /n registration /n login`)
    }
  };
};