const hash = require('object-hash');
const mysql_api = require("./mysql_api");

module.exports = external_api = (function(){

  const external_api = {};
  const utils = {};

  utils.prepareDataForSql = function(data){
    let sql_req = {};
    for( let [key, value] of Object.entries(data) ){
      sql_req[key] = [value];
    };
    return {
      sql:sql_req,
      type: sql_req.length == 2 ? 'login' : 'reg'
    };
  };

  utils.catchSQLError = function(err){
    let ret = {
      status: 'error'
    };
    if( err.code === 'ER_DUP_ENTRY' ){
      ret.data = 'Login already used';
    }else{
      ret.status = 'sql-error'
      ret.data = {
        message: err.message,
        code: err.code
      };
    };
    return ret;
  };

  utils.login_request = function(sql){
    return mysql_api.select('users', sql)
      .then( req => {
        let state = req[0][0];
        if( !state ){
          return {
            status: 'error',
            data: 'Wrong login or password!'
          };
        }else{
          return {
            status: 'ok',
            data: {
              name: state.name,
              id: state.id
            }
          };
        };
      }).catch(err => {
        return utils.catchSQLError(err);
      });
  }

  utils.reg_request = function(sql){
    return mysql_api.insert('users', sql)
      .then( (req) => {
        return {
          status: 'ok',
        };
      }).catch( err => {
        return utils.catchSQLError(err);
      });
  };

  // utils.handleSqlRequest = function(data){
  //   let state = data[0][0];
  //   if( !state ){
  //     return
  //   }
  // }

  external_api.auth_request = function(request){
    let sql = utils.prepareDataForSql(request);
    if( sql.type === 'login' ){
      return utils.login_request(sql.sql);
    }else{
      return utils.reg_request(sql.sql);
    };
  };

//     const utils = {};
//     const cached_requests = {};
//     const sql_meta = ['nation', 'tier', 'type'];

//     external_api.prepare_sql_obj = function(request){
//         let sql = {};
//         for( let key in request ){
//             if( sql_meta.indexOf(key) !== -1 ){
//                 sql[key] = request[key]
//             };
//         };
//         return {
//             sql:sql,
//             status: utils.init_cache_request(sql)
//         }
//     };

//     utils.init_cache_request = function(sql){
//         let cache = hash(sql);
//         //console.log( 'SQL statement ',sql, 'Hashed req '+cache );
//         if( !cached_requests[cache] ){
//             cached_requests[cache] = {};
//             return true;
//         }else{
//             return false;
//         };
//     };

//     external_api.generate_request_data = function(sql, req, data){
//         if( sql.status !== false ){
//             cached_requests[hash(sql.sql)] = data;
//         }else{
//             //console.log( 'request already cached!' );
//             data = cached_requests[hash(sql.sql)];
//         };
//         let meta = {
//             status: 'ok',
//             total: data.length,
//             page_total: Math.ceil( data.length/req.limit )
//         };
//         let elems = [];
//         let start = req.limit*(req.page_no - 1);
//         let end = Math.min(req.limit*(req.page_no)-1, meta.total-1);
        
//         for( let i = start ; i <= end ; i++){
//             elems.push(data[i]);
//         };
        
//         return {
//             meta: meta,
//             data: elems
//         };

//     };

    return external_api;

}());