const express = require("express")
const router = express.Router()
const Personal = require("../modls/PersonalSchema").Personal;
const mongoose = require("mongoose")
router.use(express.json());


router.get("/getAll",(req,res)=>{
    Personal.find().then((data)=>{res.json(data)})
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




router.post("/add", async(req,res)=>{
const Personal = new Personal ({
name:req.body.name,
Phone:req.body.Phone ,
Address:req.body.Address, 
image:req.body.image,
gender:req.body.gender,
Email:req.body.Email,
})
try {await Personal.save()
res.status(201)
Personal.find().then((data)=>{res.json(data)})
}
catch(e){
    console.error(e)
}
console.log("ADDED")

})

router.put("/update/:id", (req, res) => {
    Personal.findOneAndUpdate({ name: req.body.name },
{ Phone: req.body.Phone, Address: req.body.Address,image: req.body.image,
    gender: req.body.gender,Email: req.body.Email  }, () => {
       console.log('updated')
   }); 
 
 
   res.send('updated')
 });
 

router.delete("/Personal/:id",(req,res)=>{
    Personal.findByIdAndDelete(req.params.id)
    .then((data)=>{
        Personal.find().then(data=>res.json(data))
        })
     })



    



module.exports= router;