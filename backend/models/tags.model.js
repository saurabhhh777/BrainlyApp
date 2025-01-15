import mongoose from "mongoose";


const tagSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    }

});

const TagModel = mongoose.model("Tag",tagSchema);

export default TagModel;