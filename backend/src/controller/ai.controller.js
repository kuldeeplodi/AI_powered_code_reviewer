const generateContent=require('../services/ai.service')


const getResponse=async(req,res)=>{
    const code=req.body.code

    if(!code){
        return res.status(400).send("prompt is required")
    }
    const result=await generateContent(code)
    res.send(result)
}

module.exports=getResponse