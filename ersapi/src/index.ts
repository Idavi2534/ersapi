
const express = require('express')
const bodyParser = require('body-parser')
export const app = require('express')()
let userDao = require('./dao/userDAO');

const session= require('express-session')
const port = 3000

const userRouter= require( './routers/usersRouter')
const loginRouter= require( './routers/loginRouter')
const reimRouter= require( './routers/reimRouter')


app.use(bodyParser.json())
app.use(express.json())  // to support JSON-encoded bodies
app.use(express.urlencoded()) // to support URL-encoded bodies

app.use((req, res, next) => {
  console.log(`request was made with url: ${req.path} and method: ${req.method}`);
  next(); // will pass the request on to search for the next piece of middleware
});


const sess = {
    secret: 'lottery',
    cookie: { secure: false },
    resave: false,
    saveUninitialized: false
  };
 
  app.use(session(sess));

  app.get('/', (request, response) => {
    response.json({ info: 'ERS HOMEPAGE' })
  })



app.use('/users', userRouter);
app.use('/login',loginRouter);
app.use('/reimbursements',reimRouter);


  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
  
