const pool = require('../data')
import express from 'express';//have to import express before creating router
const userRouter = express.Router();

const router= require('../routers/usersRouter')
import { User } from '../models/userModel';

//////////////////////

    
  export function loginUser (request, response) {
    
     
    const name=request.param('username');
    const ppswd=request.param('password');

   
    let login= 'SELECT * FROM users WHERE username = $1 AND pass_word= $2';
    pool.query(login, [name,ppswd], (error, results) => {
      if (error) {
          response.status(400)
        throw "Invalid Credentials"

      }
      
      let stringr=`${JSON.stringify(results.rows[0])}`;
      let object=JSON.parse(stringr);
         //create session user
      
      
      let newUser= {
        id: object.user_id,
        username: object.username,
        password: '', // don't send back the passwords
        firstName: object.firstname,
        lastName: object.lastname,
        email:object.email,
        role:object.role_
         
      };

      request.session.user=newUser;
    console.log(newUser);
      //response.status(200);
      response.json(newUser);
    
      
    })
  }
   
  
///////////////////////

export function getUsers(request, response) {
    
   
    pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
      if (error) {
        throw "Access Denied"
      }
      response.status(200).json(results.rows)
    })
  
  }
/////////////////////////
export function getUsersById(request, response) {
  
      const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE user_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
 
  }
////////////////////////////
export function updateUser(request, response){
    const ID=parseInt(request.param('user_id'));
    const userName=request.param('username');
    const ppswd=request.param('pass_word');
    const firstName=request.param('firstname');
    const LastName=request.param('lastname');
    const userEmail=request.param('email');
    const role=request.param('role_');
 
  pool.query(
    'UPDATE users SET username = $1, pass_word = $2, firstName = $3, lastName = $4, email = $5, role_ = $6 WHERE user_id = $7 returning *',
    [userName, ppswd, firstName, LastName, userEmail, role, ID],
    (error, results) => {
      if (error) {
        throw error
      }
      let stringr=`${JSON.stringify(results.rows[0])}`;
      let object=JSON.parse(stringr);
      response.status(200);
      response.json(object);
     // response.status(200).json(results.rows)
    
    }
  )
  
}
/////////////////////////

module.exports={
  getUsers : getUsers,
  getUsersById : getUsersById,
  updateUser: updateUser,
  loginUser: loginUser
};