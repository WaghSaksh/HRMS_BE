const userController=require("../controller/HeadController")
const express=require("express")
const router=express()

router.post("/addhead",userController.addHead)
router.post("/login_by_head",userController.login)

module.exports=router