const { Schema, model } = require('mongoose')

const settings = new Schema({
    GuildPrefix :  { type: String },
    ID          :  { type: String }
})

module.exports = model("Prefix", settings)