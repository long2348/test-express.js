import mongoose from "mongoose";

const { Schema } = mongoose;


const UserSchema = new Schema({
    userName: String,
    firstName: String,
    lastName: String,

});
export const UserModel = mongoose.model('UserModel', UserSchema);