
const express = require("express");
var bodyParser = require('body-parser')
const app = express();
const mongoose= require('mongoose')
const multer=require('multer')
const path= require('path');
const { Utilisateur } = require("./models/utilisateur.model");

const morgan = require('morgan');

require('dotenv').config()



//Connecting DataBase
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Arti-DB',
  
})
.then(()=> {
  console.log('DATABASE CONNECTED')
})
.catch((err) => {
  console.log(err)
})

app.use(morgan('dev'))


const PORT = process.env.PORT || 9090
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("cors")());
app.use(express.static("uploads"))
app.use('/uploads', express.static(__dirname +'/uploads'));


////////////////////Rroutes
app.use("/api/utilisateurs", require("./routes/utilisateur.route"));
app.use("/api/arts", require("./routes/art.route"));

app.use('/api/partenaires', require("./routes/partenaire.route"))
app.use('/api/evenement', require("./routes/evenement.route"))
app.use('/api/Badge', require("./routes/badge.route"))
app.use('/api/Notification', require("./routes/notification.route"))
app.use('/api/Commande', require("./routes/commande.route"))
app.use('/api/Panier', require("./routes/panier.route"))
//const utilisateursController = require("./controllers/utilisateur.controller");

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});











//////////////////////Image

/*


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
 
var upload = multer({ storage: storage })
app.post('/upload', upload.single('myFile'), async(req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next("An error has occured!")
  }
})

app.get('/image',async(req, res)=>{
 const image = await Image.find()
 res.json(image)
 
})





*/






