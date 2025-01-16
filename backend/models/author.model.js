import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    authorname: {              //models are set of rules and regualtion to be followed by the user.
        type:String,
        required: true,
        unique: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    function: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
    isActive: {
        type: Boolean,
        default: false,

    },
    employedAt :{
        type:String,
        required: true,
    }

}, 
{timestamps:true}                                 //user time pf creation and other user information
);

const Author = mongoose.model('Author', authorSchema);

export default Author;
