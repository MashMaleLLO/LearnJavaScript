const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const User = require('../model/user')

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


router.post('/login', async (req, res) => {

  const {username, password} = req.body

  const user = await User.findOne(
    {
      username
    })

  if (user)
  {
    const isCorrect = bcrypt.compareSync(password, user.password)
    if (isCorrect)
    {
      //เก็บ object user ไว้ไปทำ session 
      req.session.user = user
      return res.render('index', { user })
    }
    else
    {
      return res.render('login', { message: "username or password is incorrect."})
    }
  }
  else
  {
    return res.render('login', { message: "User not Found." })
  }

})
module.exports = router