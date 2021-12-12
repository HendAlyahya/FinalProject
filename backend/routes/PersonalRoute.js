const express = require("express")
const router = express.Router()
const Personal = require("../modls/PersonalSchema");
const mongoose = require("mongoose")
router.use(express.json());


router.get("/getAll",(req,res)=>{
    Personal.find({userType:"seller"}).then((data)=>{res.json(data)})
})

router.get("/getPersonal/:id",async (req,res)=>{
    try {
        const author = await  Personal.findById(req.params.id )
        res.send(Personal);
    } catch (e) {
        res.status(500).send()
        console.error(e)
    }
})




// router.post("/add", async(req,res)=>{
// const Personal = new Personal ({
// name:req.body.name,
// Phone:req.body.Phone ,
// Address:req.body.Address, 
// image:req.body.image,
// gender:req.body.gender,
// Email:req.body.Email,
// })
// try {await Personal.save()
// res.status(201)
// Personal.find().then((data)=>{res.json(data)})
// }
// catch(e){
//     console.error(e)
// }
// console.log("ADDED")

// })

router.post("/addProudct", async(req,res)=>{
const proudct = new proudct ({
name:req.body.name,
category:req.body.category ,
description:req.body.description, 
image:req.body.image,

})
try {await proudct.save()
res.status(201)
proudct.find().then((data)=>{res.json(data)})
}
catch(e){
    console.error(e)
}
console.log("ADDED")

})

router.put("/update", (req, res) => {Personal.findOneAndUpdate({ _id: req.body.id },
{ Phone: req.body.Phone, Address: req.body.Address,image: req.body.image,
    gender: req.body.gender ,email: req.body.email ,name: req.body.name }, () => {
       console.log('updated')
   }); 
 
 
   res.send('updated')
 });
 

router.delete("/deletePersonal/:id",async (req,res)=>{
     try{
         const personal = await Personal.findByIdAndDelete({_id: req.params.id});
    if (!personal){
        return rse.status(404).send()
    } 
    // if all is well
    res.send(personal)
    // send the deleted Personal
    }catch (e){
        res.status(500).send()
        console.error(e)}
    });



    



module.exports= router;