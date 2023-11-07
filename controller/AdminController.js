const userModel = require('../model/AdminModel')
// const bcryptjs = require('bcryptjs')

async function addUser(req, res) {
    try {

        // const hash = req.body.password

        // const salt = bcryptjs.genSaltSync(10)
        // const encpassword = bcryptjs.hashSync(hash, salt)

        const userData = new userModel({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            // state: req.body.state,
            // city: req.body.city,
            password: req.body.password
            //password:encpassword
        })
        const data = await userData.save()
        res.status(200).send({ msg: "user added sucessfully", data })
    } catch (err) {
        console.log(err)
    }

}




async function getUser(req, res) {
    try {
        const data = await userModel.find()
        res.status(200).send({ data })
    } catch (err) {
        console.log(err)
    }
}


const deleteUser = async (req, res) => {
    const userId = req.params.id
    try {
        const result = await userModel.deleteOne({ _id: userId })
        if (result.deletedCount === 0) {
            res.status(404).send('user not found')
        } else {
            res.send({ msg: "user deleted sucessfullly" })
        }
    } catch (err) {
        res.status(500).send('error deleting sucessfully')
    }
}

const updateUser = async (req, res) => {
    const userId = req.params.id
    const { fname, lname, email, password } = req.body

    try {
        const result = await userModel.updateOne(
            { _id: userId }, { $set: { fname, lname, email, password } }
        )
        if (result.nModified === 0) {
            res.status(404).send('user not found')
        } else {
            res.send('user updated sucessfully')
        }
    } catch (err) {
        res.status(500).send('error updating user')
    }
}




async function findUserById(req, res) {
    const userId = req.params.id; // Assuming the user ID is passed as a route parameter
  
    try {
      const user = await userModel.findById(userId);
      
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      return res.status(200).json(user);
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      return res.status(500).send('Error retrieving user');
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


module.exports = { addUser, login, getUser, deleteUser, updateUser, findUserById }