const { Schema, model } = require('mongoose')

const count = new Schema({
    clientID   :  { type: String },
    Count      :  { type: Number }
})

module.export = model("GuildCount", count)