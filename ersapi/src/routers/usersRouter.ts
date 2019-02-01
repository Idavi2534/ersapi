import express from 'express';//have to import express before creating router

const pool = require('../data');
const userRouter = express.Router();

import{ adminMiddleware } from '../middlware/admin.midd';

const bodyParser = require('body-parser')
userRouter.use(bodyParser.json())
userRouter.use(express.json())  // to support JSON-encoded bodies
userRouter.use(express.urlencoded()) // to support URL-encoded bodie

import * as uDao from '../dao/userDAO';
let index= require('../index')


///////////////////////

/////////////////////////
   

  
  userRouter.get('',adminMiddleware, function(req, res){
     uDao.getUsers(req, res)
  })
  userRouter.get('/:id',adminMiddleware, function(req, res){ uDao.getUsersById(req, res)});
  userRouter.patch('', adminMiddleware, function(req, res){uDao.updateUser(req, res)});



  module.exports = userRouter;