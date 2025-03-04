const express = require('express')
const zod = require('zod')

const app = express();
app.use(express.json());

function validateInfo(obj){
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })

    const res = schema.safeParse(obj);
/*    
    {
        success: true,
        data: { email: 'keshav0kumar@hotmail.com', password: 'Keshav@123' }
    }
*/
    return res;
}

app.get("/", function (req, res){
    const name = req.query.name;
    if (name === undefined) throw new Error("Undefined found.")
    res.send("Hello "+ name);
})

app.post("/login", function(req,res){
    const response = validateInfo(req.body);
    if(!response.success){
        res.json({
            msg:"Your inputs are invalid."
        })
    }
    res.status(200).json({
        msg:"Login Successfull"
    })
})
app.use(function(err,req,res,next){
    res.json({err:"Some Internal Server Error"})
})
app.listen(3000,()=>console.log("Server started at http://localhost:3000"));