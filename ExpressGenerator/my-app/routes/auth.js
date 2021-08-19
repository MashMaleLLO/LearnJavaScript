const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const User = require('../model/user')
const passport = require('passport')

//หลังจากเรา login จะส่ง post มาตรงนี้ แล้วทำการ log 
router.post('/register', async (req, res) => {
  const { username, password, name } = req.body

  //ตรวจ validation
  if ( !name || !username || !password )
  {
    return res.render('/register', { message: "Please try again"})
  }

  //การ hash password
  const passwordHash = bcrypt.hashSync(password, 10)
  //add เข้า db
  const user = new User(
    {
      name,
      username,
      password: passwordHash
    })
  //save database
  await user.save()
  res.render('index', { user })
})


router.post('/login', passport.authenticate('local', 
{
  successRedirect: '/',
  failureRedirect: '/login'
}),  
async (req, res) => {

  const {username, password} = req.body

  res.redirect('/')

})
module.exports = router