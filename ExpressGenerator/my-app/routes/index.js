var express = require('express');
var router = express.Router();


//เก็บ session การ login

const isloggedIn = (req,res, next) => 
{
  if (req.isAuthenticated())
  {
    next()
  }
  else
  {
    return res.redirect('/login')
  }
}


/* GET home page. */
router.get('/', isloggedIn, function (req, res, next) {
  res.render('index', { title: 'Express' , user: req.user });
});


router.get("/login", (req,res)=> 
{
  res.render('login')
})

router.get("/register", (req,res)=> 
{
  res.render('register')
})

router.get("/logout", (req, res)=>
{
  req.logout()
  res.redirect('/')
})

module.exports = router;
