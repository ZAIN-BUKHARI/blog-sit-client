const mongoose = require('mongoose')
const { Schema } = mongoose;

const BlogSchema = new Schema({
    slug:
    {
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    title:
    {
        type:String,
        required:true,
        trim:true,
    },
    category:
    {
        type:String,
        required:true,
        trim:true,
    },
    img:
    {
        type:String,
        required:true,
        trim:true,
    },
    desc:
    {
        type:String,
        required:true,
        trim:true,
    },
    author:
    {
        type:String,
        required:true,
        trim:true,
    },
    Feature:
    {
        type:String,
        trim:true,
    },
    date:
    {
        type:String,
        trim:true,
    },
    month:
    {
        type:String,
        trim:true,
    },
    img2:
    {
        type:String,
        trim:true,
    },
    desc2:
    {
        type:String,
        trim:true,
    }
    
    
  
    

    },{timestamps:true})
    mongoose.models={}

export default mongoose.model('Blog',BlogSchema) 

