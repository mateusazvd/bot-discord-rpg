const { Schema } = require('mongoose');

export const userSchema = new Schema({
    infoId: String,
    infoTitle: String,
    infoContent: String,
    infoImg: String,
});