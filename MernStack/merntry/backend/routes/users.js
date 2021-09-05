const express = require('express')
const router = express.Router()
let User = require('../model/userModel')


router.get('/', (req, res) => 
{
    User.find()///return all user
    .then(users => { res.json(users) })
    .catch(err => { res.status(400).json('Error: ' + err)} )
})

router.post('/add', (req, res) => 
{
    const { username } = req.body
    const newUser = new User({username})

    newUser.save()
    .then(() => { res.json('User added!!') })
    .catch(err => { res.status(400).json('Error: ' + err) })
})

module.exports = router