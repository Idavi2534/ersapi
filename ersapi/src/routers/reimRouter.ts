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

reimRouter.post('', function(req, res){ rDao.submitReim(req, res)})
 reimRouter.get('reimbursements/author/userId/:user_id',adminMiddleware, function(req, res){ rDao.findByUser(req, res)});
 reimRouter.get('reimbursements/status/:statusId',adminMiddleware, function(req, res){ rDao.findByStatus(req, res)});
 reimRouter.patch('', adminMiddleware, function(req, res){rDao.updateReim(req, res)});
 reimRouter.get('/reimbursements',adminMiddleware, function(req, res){ if (req.session.user.role==="admin" ||req.session.user.role === 'finance-manager') {rDao.getReimbursements(req, res)} else {rDao.getReim(req, res)}})



 module.exports = reimRouter;
