const router = require('express').Router();
const stripe = require('stripe')("sk_test_51KBfjEIYGcwlitUU0SH50wYho0K2PNcBQZY4J1DLy9RxW4Ny7JBSMkjY8X72UPFZvJ3JF4PRkssOlCs6GEp4wO64003tK0MI3j");


router.post("/" , (req,res) =>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"usd",
    }, (stripeErr, stripeRes)=>{
        if(stripeErr){
        res.status(500).json(stripeErr);
    }else {
        res.status(200).json(stripeRes)
    }
    })
})
module.exports = router;










