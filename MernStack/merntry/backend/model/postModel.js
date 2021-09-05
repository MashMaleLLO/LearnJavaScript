const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
    {
        username: { type: String, required: true },
        description: { type: String, required: true },
        answer: { type: Array, required: true },
        date: { type: Date, required: true }
    },
    {
        timestamps: true
    })

const question = mongoose.model('question', postSchema)
module.exports = question