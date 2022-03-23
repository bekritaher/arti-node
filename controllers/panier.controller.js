const Panier = require('../models/panier.model')


//mrigl 
const index=(req, res, next) => 
{
    Panier.find({ idUser : req.headers.idUser })
        .exec(function(err, data) {
    if(err) res.status(500).send(err);
    else res.send(data);
  })
      //  console.log(req.headers)   
}

//mrigl 
const stores = (req, res, next) => {
    
    const { /*idpanier,*/ idArt} = req.body

    const Panier = new Panier({
        /*idpanier: idpanier,*/
        idArt: idArt
    })

    Panier.save().then(response => {res.json(Panier)})
    
    }


//mrigl 
const show = (req, res, next) => {
    Panier.find().sort({_id:-1})
    .select({'__v':0})
    .populate("idArt",{'_id':0})
    .then(data  => {
        const dataa = data
        res.json(dataa);
    })
    .catch(error  =>{
        console.log(error);
        res.json({
            message: "an error occured when displaying"
        })
    })   
}


//mrigll
const destory=(req,res,next) =>{

  var id = req.body._id;
  Panier.findOneAndRemove({ _id: id }, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();

  });

}

module.exports={
    index,show,stores,destory
}
