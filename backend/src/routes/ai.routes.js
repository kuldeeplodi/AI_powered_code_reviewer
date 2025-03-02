const express=require('express');   
const router=express.Router();
const getResponse=require('../controller/ai.controller');

router.post("/getAI",getResponse);


module.exports=router;