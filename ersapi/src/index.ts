
const express = require('express')
const bodyParser = require('body-parser')
export const app = require('express')()
let userDao = require('./dao/userDAO');
const session= require('express-session')
const port = 3300

 app.use((req, resp, next) => {
    resp.header('Access-Control-Allow-Origin', `http://localhost:3300`);
   resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   resp.header('Access-Control-Allow-Credentials', 'true');
   resp.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
   next();
})

const userRouter= require( './routers/usersRouter')
const loginRouter= require( './routers/loginRouter')
const reimRouter= require( './routers/reimRouter')


app.use('/login', express.static( 'webpages'))
app.use('', express.static( 'webpages'))
app.use('/users', express.static( 'webpages'))
app.use('/reimbursements', express.static( 'webpages'))


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
  

 app.get('', async  function (req,res){ await res.sendFile(path.resolve('webpages/home/index.html'))})
 let  path = require('path');

app.get('/login', async function (req,res){ await res.sendFile(path.resolve('webpages/signin/signin.html'))})

app.get('/reimbursements', async function (req,res){ await res.sendFile(path.resolve('webpages/reim/reim.html'))})
app.get('/users', async function (req,res){
  
  if(req.session.user.role === 'admin' || req.session.user.role === 'finance-manager'){ 
    await res.sendFile(path.resolve('webpages/users/manage-users.html'))}
  
  else{
    await res.sendFile(path.resolve('webpages/users/user.html'))

  }
  
})



app.get('/logout', function(req, res){function Bye (req, res) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        throw err
      } else {
        return res.redirect('/');
      }
    });
  }
}
})
app.use('/users', userRouter);
app.use('/login',loginRouter);
app.use('/reimbursements',reimRouter);


  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
  
