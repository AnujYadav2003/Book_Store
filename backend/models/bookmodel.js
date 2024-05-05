import mongoose from "mongoose";
//in schema there are various type of information in the object type
//for last updation or such type we need the timestamp--
const bookSchema=mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        author:{
            type:String,
            required:true,
        },
        publishyear:{
            type:Number,
            required:true,
        },
        

    }
)


//save a new book in mongoose in database

export const Book = mongoose.model('Cat', bookSchema);