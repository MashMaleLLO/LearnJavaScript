//connect mongoDB 
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://moondamon:moon10392@daisukifigure.wmvjs.mongodb.net/test", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})