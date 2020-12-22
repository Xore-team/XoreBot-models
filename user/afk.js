const { Schema, model } = require('mongoose')

const userAFK = new Schema({
    ID   :    { type: String },
    AFK  :    { type: Boolean, default: false }
})

module.exports = model("user", userAFK)