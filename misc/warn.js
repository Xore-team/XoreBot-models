const { Schema, model } = require('mongoose')

const warning = new Schema({
    guildID   :  { type: String },
    MemberID  :  { type: String },
    Number    :  { type: Number },
    Time      :  { type: Date, default: Date.now() },
    Moderator :  { type: String}
})

module.export = model("ModerationWarn", warning)