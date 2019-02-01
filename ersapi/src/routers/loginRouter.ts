


import express from 'express';

const pool = require('../data');
const loginRouter = express.Router();
;import * as uDao from '../dao/userDAO';



loginRouter.post('',  function(req, res){  uDao.loginUser(req, res)})

module.exports=loginRouter