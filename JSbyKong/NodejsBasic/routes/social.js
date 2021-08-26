const e = require('express')
const express = require('express')
const router = express.Router()
const db = require('monk')('localhost:27017/QuestionDB')

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
        var collection = db.get('question')
        const { name,detail,tag } = req.body
        collection.insert(
            {
                name: name,
                detail: detail,
                tag: tag
            }, (error, question) => 
            {
                if(error)
                {
                    res.send(error)
                }
                else
                {
                    req.flash("error", "Data has been added.")
                    res.location('/social/Q&A')
                    res.redirect('/social/Q&A')
                }
            })
    }
})

router.get('/gallery', (req, res, next) => 
{
    res.send('This our gallery page.')
})

module.exports = router