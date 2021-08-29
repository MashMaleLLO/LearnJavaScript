const express = require('express')
const router = express.Router()
const users = require('../../Users')
const uuid = require('uuid')


//get all username
router.get('/', (req, res) => 
{
    res.json(users)
})
//get single user

router.get('/:id', (req, res) => 
{
    let found = users.some(user => user.id === parseInt(req.params.id))
    if (found)
    {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    }
    else
    {
        res.status(400).json( { msg: `No user with the id of ${req.params.id}`} )
    }
})

//Create user

router.post('/', (req, res) => 
{
    const newUser = 
    {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }
    if ( !newUser.name || !newUser.email )
    {
        res.status(400).json({ msg: "Please complete your from." })
    }
    else
    {
        users.push(newUser)
        res.json(users)
    }
})

//update user

router.put('/:id', (req, res) => 
{
    let found = users.some(user => user.id === parseInt(req.params.id))
    if (found)
    {
        const updUser = req.body
        users.forEach(user => 
            {
                if (user.id === parseInt(req.params.id))
                {
                    user.name = updUser.name ? updUser.name : user.name
                    user.email = updUser.email ? updUser.email : user.email

                    res.json({ msg: "User updated", user })
                }
            })
    }
    else
    {
        res.statusCode(400).json({msg: `No user with the id of ${req.params.id}`})
    }
})

///delete users

router.delete('/:id', (req, res) => 
{
    let found = users.some(user => user.id === parseInt(req.params.id))
    if (found)
    {
        res.json({
                msg: 'member deleted',
                users: users.filter(user => user.id !== parseInt(req.params.id))
            })
    }
    else
    {
        res.statusCode(400).json({msg: `No user with the id of ${req.params.id}`})
    }
})

module.exports = router