import express from 'express';//have to import express before creating router

const pool = require('../data');
const reimRouter = express.Router();

import{ adminMiddleware } from '../middlware/admin.midd';

const bodyParser = require('body-parser')
reimRouter.use(bodyParser.json())
reimRouter.use(express.json())  // to support JSON-encoded bodies
reimRouter.use(express.urlencoded()) // to support URL-encoded bodie

import * as rDao from '../dao/reimDAO';
let index= require('../index')

reimRouter.post('',adminMiddleware, function(req, res){ rDao.submitReim(req, res)})
 reimRouter.get('/author/userId/:user_id',adminMiddleware, function(req, res){ rDao.findByUser(req, res)});
 reimRouter.get('/status/:statusId',adminMiddleware, function(req, res){ rDao.findByStatus(req, res)});
 reimRouter.patch('', adminMiddleware, function(req, res){rDao.updateReim(req, res)});



 module.exports = reimRouter;
