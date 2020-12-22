const { prefix } = require('../../config/config')
const { Schema, model } = require('mongoose')

const settings = new Schema({
    ID          :  { type: String },
    GuildPrefix :  { type: String, default: prefix },
})

module.exports = model("Settings", settings)