//Import mongoose module
const mongoose=require('mongoose');

//Create match schema
const matchSchema=mongoose.Schema({
    teamOne:String,
    teamTwo:String,
    scoreOne:Number,
    scoreTwo:Number,
    
});



//create match model
const match=mongoose.model("Match",matchSchema);

//export match
module.exports=match;


