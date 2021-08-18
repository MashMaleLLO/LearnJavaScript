//connect mongoDB 
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/my-app-passport", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})