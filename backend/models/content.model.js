import mongoose, { Types } from "mongoose";

const contentTypes = ['image','video','article','audio'];

const contentSchema = new mongoose.Schema({
    link:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        emum:contentTypes,
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    tags:[{
        type:Types.ObjectId,
        ref:"Tag",
    }],
    userId:{
        type:Types.ObjectId,
        ref:"User",
        required:true,
    }
});


const contentModel = mongoose.model("Content",contentSchema);

export default contentModel;