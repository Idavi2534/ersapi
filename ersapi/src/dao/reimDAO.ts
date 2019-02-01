const pool = require('../data')
import express from 'express';//have to import express before creating router
const userRouter = express.Router();

const router= require('../routers/usersRouter')
import { User } from '../models/userModel';

//////////////////////

    
  export function findByStatus (request, response) {
    
     
  }
   
  
///////////////////////

export function findByUser(request, response) {
    
  }
////////////////////////////
export function updateReim(request, response){
    
  
}

/////////////////////////
export function submitReim(request, response){
    
  
}


module.exports={
  findByStatus : findByStatus,
  findByUser : findByUser,
  updateReim: updateReim,
  submitReim: submitReim
};