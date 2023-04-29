//----------------Module Importation--------------------------------//



//------------import mongoose
const mongoose = require("mongoose");

//---------import express module

const express = require("express");

//-----------import body-parser

const bodyParser = require("body-parser");

//-----------import Path-----------
const path=require("path")

//-----------import Multer-----------
const multer=require("multer") 






//----------------------Models Importation -------------------------//
const Match = require("./models/match");
const Player = require("./models/player");
const Team = require("./models/team");
const User=require("./models/user")
//----------------------Express Application -------------------------//


//Create Express Apllication
const app = express();



//------------------------ Cinfiguration---------------------//

//Kerberosin the side server-------------------------------------


const kerberos = require('kerberos');

const options = {
  principal: 'HTTP/yourhostname@yourdomain.com',
  realm: 'YOURDOMAIN.COM',
  keytab: '/path/to/keytab/file'
};

kerberos.initializeClient('yourhostname@yourdomain.com', options, function(err, client) {
  // Handle error
  // Start Kerberos authentication process
});


//-----body parser Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//------Security Config------------------------------
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

//------Path Congig--------------------------------
app.use('/images', express.static(path.join('backend/images')))


//-----Define media type------------------------
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
 }

//----------DB congiguration

mongoose.connect("mongodb://localhost:27017/meanNOV");



//---------------Business Logic-------------------------//

app.post('/login', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  kerberos.checkPassword(username, password, function(err, result) {
    if (err) {
      res.status(401).send('Unauthorized');
    } else {
      const token = jwt.sign({ username: username }, 'secretkey');
      res.status(200).send({ token: token });
    }
  });
});


const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
  const isValid = MIME_TYPE[file.mimetype];
  let error = new Error("Mime type is invalid");
  if (isValid) {
  error = null;
}
cb(null, 'backend/images')
},
filename: (req, file, cb) => {
const name = file.originalname.toLowerCase().split(' ').join('-');
const extension = MIME_TYPE[file.mimetype];
const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + 
extension;
cb(null, imgName);
}
});
 


//DB simulation
let matches = [
  { id: 1, scoreOne: 2, scoreTwo: 1, teamOne: "FCB", teamTwo: "RMD" },
  { id: 2, scoreOne: 0, scoreTwo: 0, teamOne: "JUV", teamTwo: "ROM" },
  { id: 3, scoreOne: 4, scoreTwo: 1, teamOne: "SEV", teamTwo: "ATM" },
];

let players = [
  { id: 1, Name: "Ronaldo", Position: "ATK", Age: 37 },
  { id: 1, Name: "Messi", Position: "ML", Age: 36 },
];



//Business Logic :Get All Matches
app.get("/matches", (req, res) => {
  console.log("Here into BL :Get All Matches");
  Match.find().then(
    (docs)=>{
        res.json({ matchesTab: docs });
    }
  )
  
});

//Business Logic :Get All teams
app.get("/teams", (req, res) => {
    console.log("Here into BL :Get All teams");
    Team.find().then(
      (docs)=>{
          res.json({ teamTab: docs });
      }
    )
    
  });

//Business Logic :Get All Players
app.get("/players", (req, res) => {
  console.log("Here into BL :Get All Players");
  Player.find().then(
    (docs)=>{
        res.json({ playersTab: docs });
    }
  )
});



//Business logic :Get Match By ID
app.get("/matches/:id", (req, res) => {
  console.log("Here into BL :Get Match by ID", req.params.id);
  // for (let i = 0; i < matches.length; i++) {
  //   if (matches[i].id == req.params.id) {
  //     res.json({ findMatch: matches[i] });
  //     break;
  //   }
  // }
  Match.findOne({_id:req.params.id}).then(
    (doc)=>{
      res.json({match:doc});
    }
  )

});



//Business logic :Get Plater By ID
app.get("/players/:id", (req, res) => {
  console.log("Here into BL :Get player by ID", req.params.id);
  // for (let i = 0; i < players.length; i++) {
  //   if (players[i].id == req.params.id) {
  //     res.json({ findPlayer: players[i] });
  //     break;
  //   }
  // }
 
});

//Buniness Logic :Delete Match By ID

app.delete("/matches/:id", (req, res) => {
  console.log("Here into BL :Delete Match by ID", req.params.id);
  Match.deleteOne({_id:req.params.id}).then(
    (reponse)=>{
      console.log("Reponse",reponse);
      if (reponse.deletedCount==1) {
        res.json({message:"Deleted with success"});
      }
    }
  )
});

//Buniness Logic :Delete Player By ID

app.delete("/players/:id", (req, res) => {
  console.log("Here into BL :Delete Player by ID", req.params.id);
  for (let i = 0; i < players.length; i++) {
    if (players[i].id == req.params.id) {
      players.splice(i, 1);
      res.json({ message: "deleted" });
      break;
    }
  }
});


//Buniness Logic :Add Match
app.post("/matches", (req, res) => {
  // console.log("Here into BL :Add Match by ID",req.body);
  // matches.push(req.body);
  let match = new Match({
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
  });
  match.save((err,doc)=>{
    if (err) {
        console.log("error with Db");
        
    }else{
        res.json({ message: "Match added with success" });
    }
  });
  
});


//add Team
app.post("/teams", (req, res) => {
    console.log("here into addd team");
  let team = new Team({
    name: req.body.Name,
    foundation: req.body.Foundation,
    owner: req.body.Owner,
    stadium: req.body.Stadium,
  });
  team.save((err,doc)=>{
    console.log("Here doc",doc);
    if (err) {
        console.log("Here err ",err);
        
    }else{
        res.json({ success: true });
    }
  });
  
});


//Buniness Logic :Add Player
app.post("/players", (req, res) => {
 let player=new Player({
    Nom:req.body.Nom,
    Position:req.body.Position,
    Age:req.body.Age,
    number:req.body.nbr
 });
 player.save((err,doc)=>{
    console.log("Here doc",doc);
    if (err) {
        console.log("Here err ",err);
        
    }else{
        res.json({ success: true });
    }
  });
  
});


//Buniness Logic :Edit Match
app.put("/matches/:id", (req, res) => {
  console.log("Here into BL :Edit Match", req.params.id);
  console.log("Here into BL :body", req.body);
 Match.updateOne({_id:req.params.id},req.body).then(
  (reponse)=>{
    res.json({message:"Update with success"});
  }
 )
});


//Buniness Logic :Edit Player
app.put("/players/:id", (req, res) => {
  console.log("Here into BL :Edit Plater", req.params.id);
  console.log("Here into BL :body", req.body);
  for (let i = 0; i < players.length; i++) {
    if (players[i].id == req.params.id) {
      players[i] = req.body;
      res.json({ message: "Edited with success" });
      break;
    }
  }
});


//Buniness Logic SingUp
app.post("/users/sing-up",multer({ storage: storage }).single('img'),(req,res)=>{
  console.log("",req.body)
  let  url = req.protocol + '://' + req.get('host');
  let user=new User({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    Email:req.body.Email,
    Password:req.body.Password,
    role:req.body.role,
    avatar:url + '/images/' + req.file.filename
  })
  
  user.save((err,doc)=>{
    if (err) {
      console.log("Here error with DB",err);
    }else{
      res.json({message:"User added with success"})
    }
  });
})

//Buniness Logic SingUp
app.post("/users/login",(req,res)=>{
  console.log('here into login',req.body);
  User.findOne({Email:req.body.email,Password:req.body.pwd}).then(
    (doc)=>{
      console.log("Here finded document",doc);
      if (doc) {
        let user={
          firstName:doc.firstName,
          lastName:doc.lastName,
          role:doc.role
        }
        res.json({message:"login with success",user:user});
      } else {
        res.json({message:"Error"});
      }
    }
  )
});



// Business Logic: Search matches by score
app.post("/matches/searchByScore", (req, res) => {
  console.log("Here object from FE", req.body);
  Match.find({ scoreOne: req.body.score }).then((docs) => {
    res.json({ matches: docs });
  });
});
//--------------- exportation-----------------------//

// Make app importable
module.exports = app;
