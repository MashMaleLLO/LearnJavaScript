const express = require('express')
const router = express.Router()
router.post('/register', (req, res) => {
  console.log(req.body)
  res.redirect('/')
})
router.post('/login', (req, res) => {
  console.log(req.body)
  res.redirect('/')
})
module.exports = router