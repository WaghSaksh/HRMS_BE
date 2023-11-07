const userController=require("../controller/UserController")
const express=require("express")
const router=express()

router.post("/adduser",userController.adduser)
router.post("/login_by_user",userController.login_by_user)

module.exports=router