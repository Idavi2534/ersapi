const pool = require('../data')
import express from 'express';//have to import express before creating router
const userRouter = express.Router();

const router= require('../routers/usersRouter')
import { User } from '../models/userModel';

//////////////////////

    
  export async function loginUser (request, response) {
    
     
    const name=request.param('username');
    const ppswd=request.param('password');

   
    let login= 'SELECT * FROM users WHERE username = $1 AND pass_word= $2';
    await pool.query(login, [name,ppswd], (error, results) => {
      if (error) {
          response.status(400)
        response.send( "Invalid Credentials")

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
      response.status(200);
      response.json(newUser);
    
      
    })
  }
   
  
///////////////////////

export async function getUsers(request, response) {
    
   
  await  pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
      if (error) {
        throw "Access Denied"
      }
      response.status(200).json(results.rows)
    })
  
  }


  export async function getUser(request, response) {
    
    const name=request.param('username');
    const ppswd=request.param('password');

    let login= 'SELECT * FROM users WHERE username = $1 AND pass_word= $2';
    await pool.query(login, [name,ppswd], (error, results) => {
      if (error) {
          response.status(400)

      }
      
      let stringr=`${JSON.stringify(results.rows[0])}`;
      let object=JSON.parse(stringr);

      let newUser= {
        id: object.user_id,
        username: object.username,
        password: '', // don't send back the passwords
        firstName: object.firstname,
        lastName: object.lastname,
        email:object.email,
        role:object.role_
         
      };
      response.status(200);
      response.json(newUser);
    })
  }
/////////////////////////
export async function getUsersById(request, response) {
  
      const id = parseInt(request.params.id)
  
   await pool.query('SELECT * FROM users WHERE user_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
 
  }
////////////////////////////
export async function updateUser(request, response){
    const ID=parseInt(request.param('userid'));
    const userName=request.param('username');
    const ppswd=request.param('password');
    const firstName=request.param('fname');
    const LastName=request.param('lname');
    const userEmail=request.param('email');
    const role=request.param('role');
  

    console.log(LastName)
 await  pool.query(
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