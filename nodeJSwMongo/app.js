const express = require('express')
//ทำการ import mongoose
const mongoose = require('mongoose')

//ทำการ connect mongoDB
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect('mongodb://localhost:27017/hello-mongoose', options)
const app = express()
//จะดึงข้อมูลได้ ต้อง define schema ขึ้นมาก่อน
const CatModel = mongoose.model(
    'cat', 
    new mongoose.Schema(
        { name: String,age: Number},
        { versionKey: false, timestamps: true }
        ))
//save model
// const kitty = new CatModel(
//     { 
//         name: 'Kitty',
//         age: 12
// })
// //อย่าลืม then หลังการ save 
// kitty.save().then(() => {console.log('meow')})

app.use(express.json())


app.get('/', (req,res) => 
{
    res.json({ message: "Hello" })
})

app.get('/cats', (req,res)=>
{
    CatModel.find({}).then(cats => 
        {res.json(cats)}).catch(error => 
            {res.status(400).json({ message: 'NotFound' })
        })
})
app.get('/cats/:id', (req,res)=>
{
    const { id } = req.params
    CatModel.findById(id).then(data => 
        {
            res.json(data || {})
        }).catch(error => 
            {
                res.status(400).json({ message: 'NotFound' })
            })
})
//Creat
app.post('/cats', async (req,res)=>
{
    const { name, age } = req.body
    const cat = new CatModel(
        {
            name,
            age
        })
    await cat.save()
    res.json({ message: 'saved' })
})

//update

app.put('/cats/:id', async (req,res)=>
{
    const { id } = req.params
    const { name, age } = req.body
    const update = 
    {
        $set: {
            name,
            age
        }
    }
    const cat = await CatModel.findByIdAndUpdate(id, update, { new: true })
    res.json(cat)
})

app.delete('/cats/:id', async (req,res)=>
{
    const { id } = req.params
    const { name } = req.body
    const response = await CatModel.findByIdAndDelete(id)
    res.json({ message: `${name} is been removed`})
})

app.listen(9999, () => {console.log('OK')})