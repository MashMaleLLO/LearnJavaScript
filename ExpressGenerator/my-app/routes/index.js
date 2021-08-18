var express = require('express');
var router = express.Router();


//เก็บ session การ login

const isloggedIn = (req,res, next) => 
{
  if (!req.session.user)
  {
    res.redirect('/login')
  }
  next()
}


/* GET home page. */
router.get('/', isloggedIn, function (req, res, next) {
  res.render('index', { title: 'Express' , user: req.session.user });
});


router.get("/login", (req,res)=> 
{
  res.render('login')
})

router.get("/register", (req,res)=> 
{
  res.render('register')
})

module.exports = router;
