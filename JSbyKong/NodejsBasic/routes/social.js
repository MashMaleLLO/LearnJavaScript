const e = require('express')
const express = require('express')
const router = express.Router()
const { check, validationResult } = require("express-validator")
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

router.post('/Q&A/addQuestion',
[
    check("name", "Please name your forum.").not().isEmpty(),
    check("detail", "Please enter you detail.").not().isEmpty(),
    check("tag", "Please enter you tag.").not().isEmpty()
],
(req, res, next) => 
{
    const result = validationResult(req)
    var error = result.errors
    if (!result.isEmpty())
    {
        res.render('addQuestion', { error: error })
    }
    else
    {
        res.render('addQuestion')
    }
})

router.get('/gallery', (req, res, next) => 
{
    res.send('This our gallery page.')
})

module.exports = router