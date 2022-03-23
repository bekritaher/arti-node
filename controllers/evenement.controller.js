const Evenement = require('../models/evenement.model')


//mrigl 
const index=(req, res, next) => 
{
    Evenement.find()
    .then((evenement) =>{res.json({evenement})})
    .catch(error=>{res.json({error})})      
}


//mrigl 
const show = (req, res, next) => {
    let EvenementID = req.body.EvenementID
    Evenement.findById(EvenementID)
    .then(reponse => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:'an error Occured'
        })
    })
}


//mrigl 
const stores = (req, res, next) => {
    
        let evenement= new Evenement({
            titre:req.body.titre,
            date:req.body.date,
            adresse:req.body.adresse,
            description:req.body.description,
            image:req.body.image,

        })


    /* if (req.file){
            evenement.image=req.file.path
        }*/
       
        evenement.save()
        .then(response => {
            res.json({
                message:'evenement Added Sucessfull!'
            })
        })
    .catch(error => {
        res.json({
            message:'an error Occured here!'
        })
    })
    }
    



//mrigll
const update =(req, res, next)=>
{
    let EvenementID=req.body.EvenementID
    let updateData={
        titre:req.body.titre,
        date:req.body.date,
        adresse:req.body.adresse,
        description:req.body.description,
        image:req.body.image,
        
    }
    Evenement.findByIdAndUpdate(EvenementID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'Evenement updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}


//mrigll
const destory=(req,res,next) =>{
    let EvenementID= req.body.EvenementID
    Evenement.findByIdAndRemove(EvenementID)
    .then(()=>{
        req.json({
            message: 'Delete sucesse!'
        })
    })
    .catch(error =>{
        res.json({
            message:'an error Occured!'
        })
    })
}

module.exports={
    index,show,stores,update,destory
}
