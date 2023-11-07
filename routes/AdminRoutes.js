const userController = require('../controller/AdminController')
const express = require('express')
const router = express()

router.post('/add',userController.addUser)

router.get("/find",userController.getUser)

router.delete("/delete/:id",userController.deleteUser)

router.put("/update/:id",userController.updateUser)

router.get('/find/:id',userController.findUserById)

router.post('/login',userController.login)

module.exports = router