import mongoose from "../../database";
import { User } from "./extendUser";
import {  Schema } from "mongoose";

const userSchema=new Schema<User>({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
})

const userModel=mongoose.model("User",userSchema);
export default {userModel};