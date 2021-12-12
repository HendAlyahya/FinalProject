const express= require("express")
const mongoose = require('mongoose');
const PersonalSeed = require("../Personal_seed")
const Personal = require("../modls/PersonalSchema").Personal
const app = express();
const personalRouter= require("../routes/persRout")
const cors = require("cors") 
const Pres=require('../routes/persRout')
const cookieParser =require("cookie-parser")
const {requirePres, checkUser}=require("../midleware/midleware")





app.use(cors());
app.use("/api/Personal",PersonalRouter);
app.use(Pres);
app.use(cookieParser())
app.use(requirePres)
app.use(express.json())
app.get("*", checkUser)


const uri = 'mongodb+srv://HendFawaz:fawaz9080-@cluster0.8fojf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection
connection.once('open', () => console.log('Connected to DB'),
connection.on('disconnected', () => console.log('mongo disconnected')),
connection.on('error', err => {console.log('connection error', err)}))





// cooki 

app.get('/set-cookies', (res,req)=>{
    res.cookie("newUser", false)
    res.cookie("isEmployee", true, {maxAge: 1000 * 60 * 60 * 24 , httpOnly: true})

    res.send("you got the cookies !")

});

app.get("/read-cookies", (res,req)=>{
    const cookise = req.cookise
    console.log(cookise)
    res.json(cookise)
})

const PORT = process.env.PORT || 8080;
app.listen(PORT);