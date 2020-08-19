import React, { Component } from 'react';
   import mysql from 'mysql';
   class Users extends Component {
       constructor(props){
           super(props);
           const connection = mysql.createConnection({
           host: '127.0.0.1',
           user: 'root',
           password: 'root',
           database: 'react_prac'
        });
       connection.connect();
       console.log(connection);
    }

render() { 
    return (  
        <div>
            DB
        </div>
    );
   }
 }

 export default Users;