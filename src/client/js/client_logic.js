
export default (function(){

  /*-- This is a main client info, 
  so i desire to store it in a closure w/o using the class constructor,
  the class is only as methods storage --*/
  let login = false;
  const data = {
    name: '',
    id: 0,
    users: {}
  };

  class Client {
    
    static initLoad(){
      // let cookie = Cookies.get('simpleChatRelogin');
      // if( !cookie ){
      // Cookies.set('simpleChatRelogin', {login: 'someName', password: '12345'});

      // }else{

      // };
    };

    static isLoggedIn(){
      return login;
    };

    static initLogin(user_info){
      login = true;
      data.name = user_info.data.name;
      data.id = user_info.data.id;
    };

  };

  return Client;

}());