const { Schema, model } = require('mongoose')

const settings = new Schema({
    ID         :  { type: String },
    EmbedColor :  { type: String },
})

module.export = model("EmbedColor", settings)