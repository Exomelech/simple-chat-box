const mysql_sql = require('./mysql_sql');
const mysql = require('mysql2/promise');

module.exports = mysql_api = (function(){

    //-- MySql config --//
    const mysql_api = {};
    // const con = mysql.createConnection({
    //     host: "localhost",
    //     user: "Exomelech",
    //     database: "simple_chat_db",
    // });

    mysql_api.query = function(sql){
        return con.then( conn => conn.query(sql) );
    };

    // columns: args:
    mysql_api.insert = function(table, conditions){
        let columns = [], args = [];
        for( let key in conditions ){
          columns.push(key);
          args.push(conditions[key]);
        };
        console.log(columns, args);
        // let sql = mysql_sql.insert(table, columns, args);
        // return mysql_api.query(sql);
    };

    // columns: conditions:
    mysql_api.delete = function(table, columns, conditions){
        let sql = mysql_sql.delete(table, columns, conditions);
        return mysql_api.query(sql);
    };

    //
    mysql_api.select = function(table, conditions, orders){
        let options = {
            conditions: conditions,
            orders: orders
        };
        let sql = mysql_sql.select(table, options);
        return mysql_api.query(sql);
    };

    return mysql_api;

}());