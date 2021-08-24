const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => 
{
    res.render('social')
})

router.get('/Q&A', (req, res, next) => 
{
    res.render('qAnda')
})

router.get('/Q&A/addQuestion', (req, res, next) => 
{
    res.render('addQuestion')
})

router.post('/Q&A/addQuestion', (req, res, next) => 
{
    console.log(req.body.name)
    console.log(req.body.detail)
    console.log(req.body.tag)
    res.render('addQuestion')
})

router.get('/gallery', (req, res, next) => 
{
    res.send('This our gallery page.')
})

module.exports = router