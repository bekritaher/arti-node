const { Art } = require("../models/art.model");



//afficher

const index=(req, res, next) => 
{
    Art.find()
    .then((art) =>{res.json({art})})
    .catch(error=>{res.json({error})})      
}


//ajouter


const add = (req, res, next) => {

    console.log(req.file);
        let art= new Art({
            titre:req.body.titre,
            description:req.body.description,
            date:req.body.date,  
            image: req.body.image
    
        });
    
            
        console.log(art)
    
        art.save()
        .then(response => {
            res.json({
                message:'Art Added Sucessfull!'
            })
        })
    .catch(eroor => {
        res.json({
            message:'An error Occured!'
        })
    })
    }
    

//modifier
const update =(req, res, next)=>
{
    let id=req.body.id
    let updateData={
        titre:req.body.titre,
        description:req.body.description,
        date:req.body.date,  
        image: req.body.image
    }
    Art.findByIdAndUpdate(id, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'Art updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'An error Occured!'
    })
})
}


//supprimer

const destroy =(req,res,next) =>{
  let id= req.body._id
  Art.findByIdAndRemove(id)
  .then(()=>{
      req.json({
          message: 'Art deleted successfully!'
      })
  })
  .catch(error =>{
      res.json({
          message:'An error Occured!'
      })
  })
}


  module.exports={
    index,add,update,destroy

}
