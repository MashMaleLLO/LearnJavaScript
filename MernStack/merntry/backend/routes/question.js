const express = require('express')
const router = express.Router()
let Question = require('../model/postModel')

router.get('/', (req, res) => 
{
    Question.find()
    .then(question => { res.json(question) })
    .catch(err => { res.status(400).json('Error: ' + err) })
})

router.post('/add', (req, res) => 
{
    const { username, description, date } = req.body
    const newQuestion = new Question(
        {
            username,
            description,
            date
        })
    
    newQuestion.save()
    .then(() => {res.json('Question add')})
    .catch(err => { res.status(400).json('Error: ' + err) } )
})

module.exports = router