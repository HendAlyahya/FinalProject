const Router =require("express")
const router =Router()
const User =require("../modls/PersonalSchema")
const Cart =require("../modls/CartSchema")
const Proudct =require("../modls/proudctSchema")


router.get("/cart/:userId", async (req, res) => {
   User.findById({_id:req.params.userId})
        .then(user1=>{
            console.log(user1.cart)
            Cart.find({_id:user1.cart}).populate('cart.products')
            .then(cart=>{
                res.send(cart)
            })
        })
    })

    

    router.post("/cart/post" ,async (req,res)=>{
        const proudct1 = await Proudct.findById({_id: req.body.product})
        // console.log(proudct1)
        await User.findById({_id: req.body.userId})
        .populate('cart')
        .then(async PUser =>{
                    console.log(PUser.cart)

            if(PUser.cart == undefined){
                Cart.create({cart: {products: req.body.product, qty: req.body.qty, subtotal: req.body.qty*proudct1.price},total: req.body.qty*proudct1.price})
                .then(async(cart1) =>{
                          await User.findByIdAndUpdate(req.body.userId,{cart: cart1}).then(async(user)=>{
                    await user.save()
                    res.send(user)
                })
                    }
                )
              
            } else {

                
                let item = PUser.cart.cart.find((itemFound)=>{
                    if(itemFound.products==req.body.product){
                        return(itemFound)
                    }
                })
                if (PUser.cart.cart.includes(item)){
                    console.log("includes")
                    Cart.update({_id:PUser.cart._id,"cart.products":req.body.product},
                    {
                        $inc:{"cart.$.qty":req.body.qty},
                        $set:{
                            "cart.$.products":req.body.product,
                            "cart.$.subtotal":proudct1.price*(item.qty+req.body.qty)
                        },
                        total: PUser.cart.total+ proudct1.price*req.body.qty
                    
                    },
                    function(err,model){
                        if(err){
                            console.log(err)
                        }
                    })
                    Cart.findById({_id:PUser.cart._id}).then((newCart)=>{
                        res.send(newCart)
                    })
                }
                else{
                    console.log("else")
                let test= await Cart.findById({_id:PUser.cart._id})
                console.log(test)

              await Cart.findByIdAndUpdate(PUser.cart._id,{$push:{ cart: { products: req.body.product, qty: req.body.qty , subtotal:req.body.qty*proudct1.price}} , total:PUser.cart.total+req.body.qty*proudct1.price }).then(async (cart1) => {
                await User.findByIdAndUpdate(req.body.userId, { cart:cart1}).then(async (user) => {
                    await user.save()
                    res.send(user)
                
                })
            })
                }
            }
        })
    })


    //////////// delete cart //////
    router.delete('/cart/delete/:userId/:id',async (req, res) => {
        User.findById({ _id: req.params.userId }).then((user) => {
          Cart.findByIdAndUpdate(
            { _id: user.cart },
            {
              $pull: {
                cart: {
                    products: req.params.id,
                },
              },
            }
          ).populate('cart.products').then((cart) => {
            let subtotal;
            console.log(cart.cart)
            cart.cart.forEach((element) => {
                console.log(element.products._id)
                console.log(req.params.id)
                console.log(element.products._id == req.params.id)
                if (element.products._id == req.params.id) {
                console.log(element.subtotal);
                subtotal = element.subtotal;
              }
            });
            Cart.findByIdAndUpdate({ _id: user.cart },{total: cart.total - subtotal,}).then(async (newCart) => {
              Cart.findById({ _id: newCart._id })
                .populate("cart.products")
                .then(async (newww) => {
                  console.log(newCart);
                  await newCart.save();
                  res.send(newww);
                });
            }); 
          });
        });
      })
module.exports =router