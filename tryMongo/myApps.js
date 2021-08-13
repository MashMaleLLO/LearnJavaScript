const express = require('express')
const mongoose = require('mongoose')


////initial////////////////////////////////////

const app = express()

const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb://localhost:27017/mySD-team', option)

const MemberModel = mongoose.model('Member', 
    new mongoose.Schema(
        { studentId: Number, Firstname: String, LastName: String, Nickname: String }, { versionKey: false, timestamps: true } ))

///////////////////////////////////////////////
// const members = new MemberModel(
//     {
//         studentId: 1,
//         Firstname: "Test",
//         LastName: "test",
//         Nickname: "test"
//     })
// members.save().then(() => {console.log('Creat DB')})
///////////////////////////////////////////////

////////////Methood///////////////////////////

app.use(express.json())

app.get('/', (req,res) => 
{
    res.json({ message: 'Hello There' })
})

app.get('/members', (req,res) => 
{
    MemberModel.find({}).then(members => 
        {
            res.json(members)
        }).catch(error => 
            {
                res.status(400).json({message: "Not Found"})
            })
})


app.get('/members/:id', async (req,res)=>
{
    const { id } = req.params
    MemberModel.findById(id).then(data => 
        {
            res.json(data || {})
        }).catch(error => 
            {
                res.status(400).json({ message: "Not Found" })
            })
})


app.post('/members', async (req,res) => 
{
    const { studentId,Firstname,LastName,Nickname } = req.body
    const members = new MemberModel(
        {
            studentId,
            Firstname,
            LastName,
            Nickname
        })
    await members.save()
    res.json({message: `Add ${Firstname} to database.`})
})

app.put('/members/:id', async (req,res)=>
{
    const { id } = req.params
    const { studentId, Firstname, LastName, Nickname } = req.body
    // const oldName = await MemberModel.findById(id).then(data => {res.json(data.Firstname)}).catch(error => {res.status(400).json({message:"NotFound"})})
    const update = 
    {
        $set: {
            studentId,
            Firstname,
            LastName,
            Nickname
        }
    }
    const members = await MemberModel.findByIdAndUpdate(id, update, { new: true } )
    res.json(members)
})

app.delete('/members/:id', async (req,res) => 
{
    const { id } = req.params
    const { Firstname } = req.body
    await MemberModel.findByIdAndDelete(id)
    res.json({ message: `${Firstname} is now removed` })
})



app.listen(9998, ()=>{console.log('OK')})