const express = require('express')
const UserModel = require('../../model')
const router = express.Router()


//หลังจากเรา login จะส่ง post มาตรงนี้ แล้วทำการ log 
router.post('/register', (req, res) => {
  console.log(req.body)
  res.redirect('/')
})
router.post('/login', async (req, res) => {

  const {username, password} = req.body

  const user = await UserModel.findOne(
    {
      username,
      password
    })

  if (user)
  {
    return res.render('index', { user })
  }
  else
  {
    return res.render('login', { message: "Email or Password incorrect" })
  }

  res.redirect('/')
})
module.exports = router