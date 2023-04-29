//Import mongoose module
const mongoose=require('mongoose');


//Create match team

const teamSchema=mongoose.Schema({
    name:String,
    foundation:String,
    owner:String,
    stadium:String
});


const team=mongoose.model("Team",teamSchema);



module.exports=team;