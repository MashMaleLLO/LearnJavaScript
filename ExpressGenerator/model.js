//model ใช้ในการสร้าง schema ของ mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        name: String,
        username: 
        {
            //ทำให้ไม่ซ้ำ
            type: String,
            unique: true
        },
        password: String
    })

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel