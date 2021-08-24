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

router.get('/gallery', (req, res, next) => 
{
    res.send('This our gallery page.')
})

module.exports = router