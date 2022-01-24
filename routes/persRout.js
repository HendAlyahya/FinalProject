const express = require('express');
const router = express.Router();
const Pers =require('../controllers/controller')
router.use(express.json())



router.post('/signup' , Pers.signup_post);


router.post('/login' , Pers.login_post);
router.get('/logout' , Pers.logout_get);






module.exports = router;