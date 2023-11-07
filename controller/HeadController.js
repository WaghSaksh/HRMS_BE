const userModel = require("../model/HeadModel")

async function addHead(req,res){
    try {
        const userData= new userModel({
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            password:req.body.password
        })

        const data= await userData.save()
        res.status(200).send({ msg: "user added sucessfully", data })
        
    } catch (error) {
        console.log(error) 
    }
} 
const login = async (req, res) => {
    const { email, password } = req.body
    try {

        const data = await userModel.find({ email, password })

        if (data === null) {
            res.status(401).send({ msg: 'user dosent exist' })
        } else {
            res.status(200).send({ data })
        }

    } catch (error) {
        console.log(err);
    }
}
module.exports={login,addHead}