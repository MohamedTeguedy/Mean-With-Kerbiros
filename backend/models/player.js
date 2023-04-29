//Import mongoose module
const mongoose=require('mongoose');


const playerSchema=mongoose.Schema({
    Nom:String,
    Age:Number,
    Position:String,
   
    
});

const player=mongoose.model("Player",playerSchema);


module.exports=player;