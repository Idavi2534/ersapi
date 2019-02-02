const pool = require('../data')
import express from 'express';//have to import express before creating router
const userRouter = express.Router();
import {Reimbursement} from '../models/reimModel';
const router= require('../routers/usersRouter')
import { User } from '../models/userModel';

//////////////////////

    
  export function findByStatus (request, response) {
    const status = parseInt(request.params.statusId)
  
  pool.query('SELECT * FROM reimbursements WHERE status = $1', [status], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })


     
  }
   
  
///////////////////////

export function findByUser(request, response) {
  const id = parseInt(request.params.user_id)
  
  pool.query('SELECT * FROM reimbursements WHERE author = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })

}
  
////////////////////////////
export function updateReim(request, response){
  const rID=parseInt(request.param('reimbursementId'));
  const author=parseInt(request.param('userId'));
  const amount=+request.param('amount');
  const description=request.param('description');
  const status=+request.param('status');
  const user= request.session.user
  let resolver=0;
  if(status ===20 || status===40)
  {
  resolver=user.id
  }
  else{
    resolver=null
  }
 
  console.log(description)
  let type=0;
  if (description==='food'){
     type=3
   }
   else if (description==='lodging'){
    type=1
  }
  else if (description==='travel'){
    type=2
  }
  else {  type=4  }


  
pool.query(
  'UPDATE reimbursements SET author = $2, amount = $3, dateResolved =  current_date , description = $4, resolver = $5, status = $6, type_ = $7 WHERE reimbursementId = $1 returning * ;',
  [rID, author, amount, description, resolver, status, type],
  (error, results) => {
    if (error) {
      throw error
    }
    let stringr=`${JSON.stringify(results.rows[0])}`;
    let object=JSON.parse(stringr);
    response.status(200);
    response.json(object);
  }
)

  
}
  
/////////////////////////
export function submitReim(request, response){
  
  
  const author=+request.param('userId');
  const amount=+request.param('amount');
  const description=request.param('description');
  const status=30;
  console.log(author)
  console.log(amount)
  console.log(description)
  let type=0;
  if (description==='food'){
     type=3
   }
   else if (description==='lodging'){
    type=1
  }
  else if (description==='travel'){
    type=2
  }
  else {  type=4  }




  //let reim= new Reimbursement()
pool.query('INSERT INTO reimbursements (reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type_  ) VALUES (default, $1, $2, current_date , null, $3, null, $4, $5  ) returning * ;',
 [author, amount, description, status, type], (error, results) => {
    if (error) {
      throw error
    }
    

    let stringr=`${JSON.stringify(results.rows[0])}`;
   
    let object=JSON.parse(stringr);
    response.status(201);
    
    response.json(object);
  }
)
  
}


module.exports={
  findByStatus : findByStatus,
  findByUser : findByUser,
  updateReim: updateReim,
  submitReim: submitReim
};