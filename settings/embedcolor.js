const { embedColor } = require('../../config/config')
const { Schema, model } = require('mongoose')

const settings = new Schema({
    ID         :  { type: String },
    EmbedColor :  { type: String, default: embedColor },
})

module.export = model("Settings", settings)