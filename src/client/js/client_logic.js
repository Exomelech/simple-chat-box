import Cookies from 'js-cookie';

export default (function(){

  const login = false;

  class Client {
    static initLoad(){
      let cookie = Cookies.get('simpleChatRelogin');
      if( !cookie ){
        //Cookies.set('simpleChatRelogin', {login: 'someName', password: '12345'});

      }else{

      };
    };

    static isLoggedIn(){
      console.log(login)
      return login;
    };

  };

  return Client;

}());