import { Link } from 'react-router-dom';
import data from '../../mocks/auth-form.json';

export default class AuthForm extends React.Component {
  render() {
    const { type } = this.props;
    if( type==='registration' || type==='login' ){
      const { name_pattern, pattern, form_title, button_title, nav_title, link } = data[type];
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
          <button className='auth-form__button-submit' type="submit">{button_title}</button> 
          <Link to={link} className='auth-form__button-submit'>{nav_title}</Link>
        </form>
      );
    }else{
      return new Error(`Invalid form type ${type} /n registration /n login`)
    }
  };
};