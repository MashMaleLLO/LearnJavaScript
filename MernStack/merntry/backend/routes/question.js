const express = require('express')
const question = require('../model/postModel')
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

router.get('/:id', (req, res) => 
{
    Question.findById(req.params.id)
    .then(question => { res.json(question) })
    .catch(err => {res.status(400).json('Error: ' + err)})
})

router.delete('/:id', (req, res) => 
{
    Question.findByIdAndDelete(req.params.id)
    .then(() => { res.json('Question deleted.') })
    .catch(err => { res.status(400).json('Error: ' + err) })
})

router.post('/update/:id', (req, res) => 
{
    Question.findById(req.params.id)
    .then(question => 
        {
            question.username = req.body.username
            question.description = req.body.description
            question.date = Date.parse(req.body.date)

            question.save()
            .then(() => { res.json("Question updated") })
            .catch(err => { res.status(400).json('Error: ' + err) })
        })
    .catch(err => { res.status(400).json('Error: ' + err) })
})


module.exports = router