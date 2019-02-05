


import express from 'express';

const pool = require('../data');
const loginRouter = express.Router();
;import * as uDao from '../dao/userDAO';



loginRouter.post('', async function(req, res){ await uDao.loginUser(req, res)})
  
module.exports=loginRouter