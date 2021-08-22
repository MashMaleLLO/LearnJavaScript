const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => 
{
    res.render('product')
})

router.get('/add', (req, res, next) => 
{
    res.send('Add a product.')
})

router.get('/edit', (req, res, next) => 
{
    res.send('Edit a product.')
})

router.get('/delete', (req, res, next) => 
{
    res.send('Delete a product.')
})

module.exports = router