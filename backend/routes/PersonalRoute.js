const express = require("express")
const router = express.Router()
const Personal = require("../modls/PersonalSchema");
const Cart = require("../modls/CartSchema");
const mongoose = require("mongoose")
router.use(express.json());


router.get("/getAll",(req,res)=>{
    Personal.find({userType:"seller"}).then((data)=>{res.json(data)})
})

router.get("/getPersonal/:id",async (req,res)=>{
    try {
        const user = await  Personal.findById(req.params.id )
        res.send(user);
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

router.get("/getPersonal/:id",async (req,res)=>{
    try {
        const person = await Personal.findById(req.params.id)
        await person.populate( 'proudct' );
        res.send(person);
    } catch (e) {
        res.status(500).send()
        console.error(e)
    }
})

router.post("/addProudct", async(req,res)=>{
Personal.findById({_id: req.body.personalId}).then(PUser=>{
    console.log("Find"+PUser)
    Proudct.create({
        name:req.body.name,
        category:req.body.category ,
        description:req.body.description, 
        image:req.body.image,
        price:req.body.price}).then( proudct =>{
    console.log(proudct)
    Personal.findByIdAndUpdate(req.body.personalId,{$push:{proudct:proudct}}).then(async(user)=>{
    await user.save()
    res.send(user)
}
)
}
)})
})

router.post("/addCart", async(req,res)=>{Personal.findById({_id: req.body.personalId}).then(PUser=>{
    console.log("Find"+PUser.cart)
    if (PUser.cart== undefined ){
      Cart.create({cart:{proudcts:req.body.proudct,qty:req.body.qty}}).then( cart =>{
    console.log(cart)
    Personal.findByIdAndUpdate(req.body.personalId,{cart:cart}).then(async(user)=>{
    await user.save()
    res.send(user)
}
    )}
)   
    } else{
        Cart.updateOne({cart:{proudcts:req.body.proudct,qty:req.body.qty}}).then(async(cart)=>{
            Personal.findByIdAndUpdate(req.body.personalId,{cart:cart}).then(async(user)=>{
                await user.save()
                res.send(user)
        })
            )
        }
    
    
   
})
});






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